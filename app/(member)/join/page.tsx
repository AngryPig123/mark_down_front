import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import {insertMemberAction} from "@/action/member/member-action";
import FormSubmitButton from "@/components/form/FormSubmitButton";
import LoginIdFormInputGroup from "@/components/form/LoginIdFormInputGroup";

export default function MemberJoinPage() {


    return (
        <>
            <div className='flex justify-center'>
                <FormContainer action={insertMemberAction}>

                    <LoginIdFormInputGroup/>

                    <FormInput
                        name='email'
                        type='email'
                        label='email'
                        defaultValue='shguddnr2@Naver.com'
                    />

                    <FormInput
                        name='password'
                        type='password'
                        label='password'
                        defaultValue='password'
                    />

                    <FormInput
                        name='passwordCheck'
                        type='password'
                        label='passwordCheck'
                        defaultValue='passwordCheck'
                    />

                    <FormInput
                        name='firstName'
                        type='text'
                        label='firstName'
                        defaultValue='firstName'
                    />

                    <FormInput
                        name='lastName'
                        type='text'
                        label='lastName'
                        defaultValue='lastName'
                    />

                    <FormSubmitButton text="insert"/>

                </FormContainer>
            </div>
        </>
    )
}