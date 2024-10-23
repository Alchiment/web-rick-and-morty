import {ChangeEvent, Ref} from "react";

interface InputStandardProps {
    id: string;
    label?: string;
    className?: string;
    placeholder?: string;
    type?: string;
    value?: string|number;
    disabled?: boolean;
    defaultValue?: string|number;
    attrAutocomplete?: boolean;
    inputRef?: Ref<HTMLInputElement>;
    onChange?(e: ChangeEvent<HTMLInputElement>): void;
    onClick?(e: MouseEvent): void;
}

export default function InputStandard (
    {
        id,
        className,
        placeholder,
        type = 'text',
        value,
        onChange,
        defaultValue,
        disabled,
        onClick,
        inputRef,
        attrAutocomplete = true,
    }: InputStandardProps) {
    return <>
        <input name={id}
               type={type}
               placeholder={placeholder}
               value={value}
               disabled={disabled}
               defaultValue={defaultValue}
               className={`rounded w-full b-input border-0 ${className}`}
               ref={inputRef}
               onClick={(e: any) => {
                   onClick && onClick(e)
               }}
               autoComplete={attrAutocomplete ? 'on' : 'off'}
               onChange={
                   (e: ChangeEvent<HTMLInputElement>) => {
                       { onChange && onChange(e) }
                   }
               }
        />
    </>;
}