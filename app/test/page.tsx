import FormContainer from "@/components/test/FormContainer";
import {testPostAction} from "@/action/test/test-action";
import FormInput from "@/components/test/FormInput";
import FormSubmitButton from "@/components/test/FormSubmitButton";
import BusinessSelectBox from "@/components/test/BusinessSelectBox";

export default function TestPage() {

    return (
        <>
            <section>
                <h2 className="text-2xl font-semibold md-8 capitalize">
                    create property
                </h2>
                <div className="border p-8 rounded">
                    <h3 className="text-lg mb-4 font-medium">General Info</h3>
                    <FormContainer action={testPostAction}>
                        <div className="grid md:grid-cols-2 gap-8 mb-4">

                            <FormInput
                                name='name'
                                type='text'
                                label='Name (20 limit)'
                                defaultValue=''
                            />

                            <FormInput
                                name='content'
                                type='text'
                                label='Name (20 limit)'
                                defaultValue=''
                            />

                            <BusinessSelectBox/>

                            <FormSubmitButton
                                className='mt-12'
                                text='create rental'
                            />
                        </div>
                    </FormContainer>
                </div>
            </section>
        </>
    )

}