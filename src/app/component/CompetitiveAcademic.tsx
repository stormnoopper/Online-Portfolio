import { achievements } from "@/app/data/profile";

export default function CompetitiveAcademic() {
    return (
        <div className="divide-y divide-zinc-200">
            {achievements.map((item) => (
                <div key={item.title} className="py-6 first:pt-0 last:pb-0">
                    <h3 className="font-semibold text-zinc-900">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-zinc-600">{item.description}</p>
                </div>
            ))}
        </div>
    );
}
