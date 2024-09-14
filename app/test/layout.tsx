import React from "react";

export default async function DefaultTestPageLayout(
    {children}: { children: React.ReactNode }
) {

    return (
        <>
            <div>
                {children}
            </div>
        </>
    )

}
