interface Props {
    prop: string;
}

export default function Terms({ prop }: Props) {
    return (
        <section className="space-y-2">
            <h3 className="font-bold text-xl text-gray-900">Terms & conditions</h3>

            <ul className="text-sm leading-relaxed text-gray-600 list-disc pl-4 space-y-1">
                {prop.split("\n").map((line, index) => (
                    <li key={index}>{line}</li>
                ))}
            </ul>
        </section>
    );
}