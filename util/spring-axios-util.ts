import axios from "axios";
import {cookies} from "next/headers";

const backEndApiClient = axios.create({
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

backEndApiClient.interceptors.request.use((config) => {

    const token = getCookieValue('accessToken');
    if (token) {
        config.headers['Authorization'] = `${token}`;
    }
    const csrfToken = getCookieValue('csrfToken'); // 쿠키에서 CSRF 토큰 가져오기
    if (csrfToken) {
        config.headers['X-CSRF-Token'] = csrfToken; // CSRF 토큰을 요청 헤더에 추가
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default backEndApiClient;
