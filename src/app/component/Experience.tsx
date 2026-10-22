import { experience } from "@/app/data/profile";

export default function Experience() {
    return (
        <div className="space-y-12">
            {experience.map((item) => (
                <div key={item.company}>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                        <h3 className="text-lg font-semibold text-zinc-900">{item.position}</h3>
                        <span className="shrink-0 text-sm tabular-nums text-zinc-500">{item.period}</span>
                    </div>
                    <div className="mt-0.5 text-zinc-600">{item.company}</div>
                    <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-zinc-700 marker:text-zinc-400">
                        {item.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
