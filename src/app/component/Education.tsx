import { education } from "@/app/data/profile";

export default function Education() {
    return (
        <div className="space-y-8">
            {education.map((item) => (
                <div key={item.school}>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                        <h3 className="text-lg font-semibold text-zinc-900">{item.school}</h3>
                        <span className="shrink-0 text-sm tabular-nums text-zinc-500">{item.period}</span>
                    </div>
                    <div className="mt-0.5 text-zinc-600">{item.program}</div>
                    <div className="mt-1 text-sm text-zinc-500">GPAX {item.gpax}</div>
                </div>
            ))}
        </div>
    );
}
