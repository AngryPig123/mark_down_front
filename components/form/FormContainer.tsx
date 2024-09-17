'use client'
import React, {useEffect} from "react";
import {useFormState} from "react-dom"
import {ActionFunction} from "@/type/function-type";
import {useToast} from "@/components/ui/use-toast";

const initialState = {
    message: '',
}

export default function FormContainer(
    {action, children}: { action: ActionFunction, children: React.ReactNode }
) {

    const [state, formAction] = useFormState(action, initialState);

    useEffect(() => {
        if (state.message) {
            alert(state.message)
        }
    }, [state]);

    return (
        <>
            <form action={formAction}>
                {children}
            </form>
        </>
    )

}