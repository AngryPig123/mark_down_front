import axios from "axios";
import {cookies} from "next/headers";

const apiClient = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
    withCredentials: true,
})

const isClient = () => typeof window !== 'undefined';

const getCookieValue = (name: string) => {
    if (isClient()) {
        const cookies = document.cookie.split('; ');
        const cookie = cookies.find(row => row.startsWith(`${name}=`));
        return cookie ? cookie.split('=')[1] : null;
    } else {
        const serverCookies = cookies();
        return serverCookies.get(name)?.value || null;
    }
};

apiClient.interceptors.request.use((config) => {
    const token = getCookieValue('accessToken');
    if (token) {
        config.headers['Authorization'] = `${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default apiClient;
