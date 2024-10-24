import {ReactNode} from "react";

export interface ButtonStandardPropsInterface {
    children: ReactNode;
    block?: boolean;
    type?: 'button'|'submit';
    onClick?(): void;
    disabled?: boolean;
    showSpinner?: boolean;
    className?: string;
}