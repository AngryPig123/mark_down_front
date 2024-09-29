'use server'
import {redirect} from "next/navigation";
import axios, {Method} from "axios";
import backEndApiClient from "@/util/spring-axios-util";
import {memberJoinSchema} from "@/zod/member/member";
import {MemberJoinRequest} from "@/type/member/member-type";

const renderError = (error: unknown): { message: string } => {
    return {message: error instanceof Error ? error.message : 'An error occurred'}
}

export const insertMemberAction = async (
    prevState: any,
    formData: FormData
): Promise<{ message: string }> => {

    const requestBody = Object.fromEntries(formData) as MemberJoinRequest
    console.log(requestBody)
    const validResult = memberJoinSchema.safeParse(requestBody)


    try {

        await backEndApiClient.post('/api/v1/member/join', requestBody, {
            headers: {
                'Content-Type': 'application/json',
            }
        })

    } catch (error) {
        if (axios.isAxiosError(error)) {
            const data = error.response?.data;
            console.log('error');
            return {message: data.message};
        }
    }

    redirect('/')

}

export const existMemberByLoginIdValidAction = async (
    loginId: string
): Promise<{ status: number }> => {

    try {
        await axios({
            url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/member/valid/loginId?loginId=${loginId}`,
            method: 'POST' as Method,
        });
        return {status: 200};
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(error.response?.status);
            return {status: error.response?.status || 500};
        } else {
            return {status: 500};
        }
    }

}