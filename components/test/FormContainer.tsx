'use client'
import React, {useEffect} from "react";
import {ActionFunction} from "@/type/function-type";
import {useFormState} from "react-dom";
import {useToast} from "../ui/use-toast";

const initialState = {
    message: ''
}

export default function FormContainer(
    {action, children}: { action: ActionFunction, children: React.ReactNode }
) {

    let [state, formAction] = useFormState(action, initialState);
    const {toast} = useToast()

    // useEffect(() => {
    //     if (state.message) {
    //         toast({description: state.message})
    //     }
    // }, [state]);

    return (
        <>
            <form action={formAction}>
                {children}
            </form>
        </>
    )

}