'use server'
import {redirect} from "next/navigation";
import {MemberInsertProps} from "@/type/member/member-type";
import axios, {Method} from "axios";

const renderError = (error: unknown): { message: string } => {
    return {message: error instanceof Error ? error.message : 'An error occurred'}
}

export const insertMemberAction = async (
    prevState: any,
    formData: FormData
): Promise<{ message: string }> => {

    const requestBody: MemberInsertProps = {
        loginId: formData.get('loginId') as string | null,
        email: formData.get('email') as string | null,
        password: formData.get('password') as string | null,
        passwordCheck: formData.get('passwordCheck') as string | null,
        firstName: formData.get('firstName') as string | null,
        lastName: formData.get('lastName') as string | null,
    }

    try {
        await axios({
            url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/member/join`,
            method: 'POST' as Method,
            headers: {
                'Content-Type': 'application/json',
            },
            data: requestBody
        });
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