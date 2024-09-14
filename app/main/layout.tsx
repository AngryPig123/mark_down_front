import React from "react";

export default async function DefaultMainPageLayout(
    {children}: { children: React.ReactNode }
) {

    return (
        <>
            <div>
                <h2>hello</h2>
            </div>
            <div>
                {children}
            </div>
        </>
    )

}