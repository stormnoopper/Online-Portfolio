import Image from "next/image";
import Link from "next/link";

export default function ProjectShow({ imgSrc, title, projectLink }: { imgSrc: string; title: string; projectLink: string }) {
    return (
        <Link href={projectLink} className="group block">
            <div className="relative aspect-square overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
                <Image
                    src={imgSrc}
                    alt={title}
                    fill
                    sizes="(min-width: 1024px) 240px, (min-width: 640px) 30vw, 45vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
            </div>
            <div className="mt-3 text-sm font-medium text-zinc-900 group-hover:text-teal-700 md:text-base">
                {title}
            </div>
        </Link>
    );
}
