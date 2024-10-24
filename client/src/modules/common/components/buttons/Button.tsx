import {ButtonStandardPropsInterface} from "../../models/button-standard-props.model.ts";

export default function Button(
    {
        children,
        block,
        type = 'button',
        onClick,
        disabled,
        className = '',
    }: ButtonStandardPropsInterface
) {
    return <>
        <button type={type}
                onClick={onClick}
                disabled={disabled}
                className={
                    `px-4 py-2 rounded ${block ? 'w-full' : ''}
                    ${className}
                    ${disabled ? 'bg-b-gray border-b-gray text-b-gray-2' : (className || 'bg-b-purple border-b-purple text-white')}`
                }>
            <span className="mx-1">
                {children}
            </span>
        </button>
    </>;
}