import backEndApiClient from "@/util/spring-axios-util";
import {NextResponse} from "next/server";

export async function POST(req: Request) {
    try {
        const response = await backEndApiClient.post('/api/v1/security/csrf');
        return NextResponse.json({ token: response.data.token });
    } catch (error) {
        console.error('Error fetching CSRF token:', error);
        return NextResponse.json({ error: 'Failed to fetch CSRF token' }, { status: 500 });
    }
}