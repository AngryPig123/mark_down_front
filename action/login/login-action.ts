'use server'

import axios, {Method} from "axios";
import {MemberLoginRequestProps} from "@/type/login/login-type";
import {cookies} from "next/headers";

export const memberLoginApiAction = async (
    prevState: any,
    formData: FormData
): Promise<{ message: string }> => {

    const requestBody: MemberLoginRequestProps = {
        loginId: formData.get('loginId') as string | null,
        password: formData.get('password') as string | null,
    }

    try {
        await axios({
            url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/login`,
            method: 'POST' as Method,
            headers: {
                'Content-Type': 'application/json',
            },
            data: requestBody
        })
            .then(response => {
                cookies().set("accessToken", response.data.accessToken);
            });

    } catch (error) {
        if (axios.isAxiosError(error)) {
            const data = error.response?.data;
            console.log('error');
            return {message: data.message};
        }
    }

    return {message: "success"};
    // redirect('/')

}

export const loginTestAction = async (): Promise<{ message: string }> => {
    try {
        await axios({
            url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/login/test`,
            method: 'GET' as Method,
            headers: {
                'Content-Type': 'application/json',
                Authorization: cookies().get("accessToken")?.value
            },
        })
            .then((response) => {
                console.log(response)
            });

    } catch (error) {
        if (axios.isAxiosError(error)) {
            const data = error.response?.data;
            console.log('error');
            return {message: data.message};
        }
    }
    return {message: "success"};
    // redirect('/')
}