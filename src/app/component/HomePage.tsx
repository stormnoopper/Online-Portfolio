import Image from "next/image";
import { summary, title } from "@/app/data/profile";

export default function HomePage() {
    return (
        <div className="flex flex-col-reverse items-start gap-10 py-16 md:flex-row md:items-center md:justify-between md:gap-16 md:py-28">
            <div className="max-w-2xl">
                <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
                    Saroot Areerattanawetch
                </h1>
                <p className="mt-4 text-lg font-medium text-teal-700 md:text-xl">
                    {title.split(" | ").join(" · ")}
                </p>
                <p className="mt-6 leading-relaxed text-zinc-600 md:text-lg">
                    {summary}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                    <a
                        href="#contact"
                        className="rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
                    >
                        Get in touch
                    </a>
                    <a
                        href="https://github.com/stormnoopper"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-400"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/saroot-fed/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-400"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
            <div className="relative aspect-[3/4] w-40 shrink-0 overflow-hidden rounded-2xl bg-zinc-200 md:w-64">
                <Image
                    src="/pic/mainPic.png"
                    alt="Saroot Areerattanawetch"
                    fill
                    priority
                    sizes="(min-width: 768px) 256px, 160px"
                    className="object-cover object-center"
                />
            </div>
        </div>
    );
}
