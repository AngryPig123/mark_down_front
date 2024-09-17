import React from "react";

export default function MemberJoinLayoutPage(
    {children}: { children: React.ReactNode },
) {

    return (
        <>
            <div className="flex p-3 justify-center">
                <div>join page</div>
            </div>
            {children}
        </>
    )

}