import {NextResponse} from "next/server";
import {corsCheckApi} from "@/action/member/member-action";

export const GET = async () => {

    const response = await corsCheckApi();
    console.log(response)

    return NextResponse.json({message: 'test'})
}