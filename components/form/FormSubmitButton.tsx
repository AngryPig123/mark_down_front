import {Button} from "@/components/ui/button";

type FormSubmitButtonProps = {
    text?: string
}

export default function FormSubmitButton(
    {text}: FormSubmitButtonProps
) {
    return (
        <>
            <button
                className='mt-2 border-2'
                type="submit"
            >
                {text}
            </button>
        </>
    )
}