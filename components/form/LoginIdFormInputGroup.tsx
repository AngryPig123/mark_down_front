'use client'
import FormInput from "@/components/form/FormInput";
import React, {useRef} from "react";
import {existMemberByLoginIdValidAction} from "@/action/member/member-action";

export default function LoginIdFormInputGroup() {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleLoginIdValid = async (event: React.MouseEvent<HTMLButtonElement>) => {

        event.preventDefault();

        if (inputRef.current) {
            const loginId = inputRef.current.value;
            const response = await existMemberByLoginIdValidAction(loginId);
            if (response.status === 200) {
                alert('ok!')
            }else{
                alert(response.status)
            }
        }

    }

    return (
        <>
            <div className="flex">
                <FormInput
                    ref={inputRef}
                    name='loginId'
                    type='text'
                    label='loginId'
                    defaultValue='loginId'
                />
                <button
                    onClick={handleLoginIdValid}
                    className='p-2 border-2'
                >
                    valid
                </button>
            </div>
        </>
    )

}
