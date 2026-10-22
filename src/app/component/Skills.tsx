import { skills } from "@/app/data/profile";

export default function Skills() {
    return (
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {skills.map((category) => (
                <div key={category.title}>
                    <h3 className="font-semibold text-zinc-900">{category.title}</h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                        {category.items.map((item) => (
                            <li
                                key={item}
                                className="rounded-md border border-zinc-200 bg-white px-2.5 py-1 text-sm text-zinc-700"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
