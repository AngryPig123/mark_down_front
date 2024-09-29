'use server';

import frontEndApiClient from "@/util/next-axios-util";
import {cookies} from "next/headers";

export default async function CsrfComponent() {
    const response = await frontEndApiClient.post('/api/csrf')
    const csrfToken = response.data.token;
    cookies().set('csrfToken', csrfToken, {path: '/'});
    frontEndApiClient.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
    return null;
}