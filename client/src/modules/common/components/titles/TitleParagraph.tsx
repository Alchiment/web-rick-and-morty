import {ReactNode} from "react";

interface TitleLightProps {
    children: ReactNode;
    className?: string;
}

export default function TitleParagraph({ children, className }: TitleLightProps) {
    return (
        <h4 className={`text-b-gray-2 m-0 p-0 ${className ?? ''}`}>
            {children}
        </h4>
    );
}