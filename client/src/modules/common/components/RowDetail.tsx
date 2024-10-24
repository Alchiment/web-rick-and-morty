interface CharacterInterface {
    title: string;
    value: string|number;
    className?: string;
    borderLine?: boolean;
}

export default function RowDetail(
    {
        title,
        value,
        className,
        borderLine = true
    }: CharacterInterface
) {
    return (
        <section className={`${borderLine ? 'border-b border-b-gray' : ''} ${className}`}>
            <p className="font-bold">{title}</p>
            <p className="text-b-gray-2">{value || '-'}</p>
        </section>
    );
}