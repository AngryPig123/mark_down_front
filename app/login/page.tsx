'use client'
import FormInput from "@/components/form/FormInput";
import FormContainer from "@/components/form/FormContainer";
import {loginTestAction, memberLoginApiAction} from "@/action/login/login-action";
import FormSubmitButton from "@/components/form/FormSubmitButton";
import {Button} from "@/components/ui/button";

export default function LoginPage() {

    const handleLoginTest = async () => {
        await loginTestAction()
    }

    return (
        <>
            <div className='flex justify-center'>
                <FormContainer action={memberLoginApiAction}>

                    <FormInput
                        name='loginId'
                        type='text'
                        label='loginId'
                        defaultValue='admin'
                    />

                    <FormInput
                        name='password'
                        type='password'
                        label='password'
                        defaultValue='1q2w3e4R!@'
                    />

                    <FormSubmitButton
                        text='login'
                    />

                </FormContainer>

                <Button
                    onClick={handleLoginTest}
                >
                    test
                </Button>

            </div>
        </>

    )

}