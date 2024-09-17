import { forwardRef } from 'react';

type FormInputProps = {
    name: string;
    type: string;
    label?: string;
    defaultValue?: string;
    placeholder?: string;
};

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
    ({ label, name, type, defaultValue, placeholder }, ref) => {
        return (
            <div className="flex flex-col">
                <label htmlFor={name}>
                    {label || name}
                </label>
                <input
                    className="border-2"
                    id={name}
                    name={name}
                    type={type}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    ref={ref} // ref 전달
                    required
                />
            </div>
        );
    }
);

FormInput.displayName = 'FormInput';

export default FormInput;
