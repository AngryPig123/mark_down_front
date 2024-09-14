'use client'
import TestButton from "@/components/test/TestButton";
import {corsCheckApi} from "@/action/member/member-action";

export default function Home() {
    return (
        <>
            <TestButton handler={corsCheckApi}></TestButton>
        </>
    );
}
