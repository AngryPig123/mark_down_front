'use server'

import axios, {Method} from "axios";
import {MemberLoginRequestProps} from "@/type/login/login-type";
import {cookies} from "next/headers";
import backEndApiClient from "@/util/spring-axios-util";

export const memberLoginApiAction = async (
    prevState: any,
    formData: FormData
): Promise<{ message: string }> => {

    const requestBody: MemberLoginRequestProps = {
        loginId: formData.get('loginId') as string | null,
        password: formData.get('password') as string | null,
    }

    try {
        const response = await backEndApiClient.post('/api/v1/login', requestBody, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                cookies().set("accessToken", response.data.accessToken);
                cookies().set("refreshToken", response.data.refreshToken);
            });
        console.log(response);

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

        const response = await backEndApiClient.get('/api/v1/login/test');

    } catch (error) {
        if (axios.isAxiosError(error)) {
            const data = error.response?.data;
            return {message: data.message};
        }
    }
    return {message: "success"};
    // redirect('/')
}