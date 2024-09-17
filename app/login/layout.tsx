import React from "react";

export default function MemberLoginPageLayout(
    {children}: { children: React.ReactNode },
) {


    return (
        <>
            <div className="flex p-3 justify-center">
                <div>login page</div>
            </div>
            {children}
        </>
    )

}