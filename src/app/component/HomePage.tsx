import Image from "next/image";
import { summary, title } from "@/app/data/profile";

export default function HomePage() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-28 my-16 md:my-40 px-4">
            <div className="relative aspect-square w-3/4 max-w-xs md:w-1/4 shrink-0 rounded-full overflow-hidden">
                <Image
                    src="/pic/mainPic.png"
                    alt="MainPicture"
                    fill
                    className="object-cover object-center"
                />
            </div>
            <div className="w-full md:max-w-2xl flex flex-col gap-4 md:gap-3 text-center md:text-left">
                <div className="text-3xl md:text-5xl font-semibold">
                    Saroot Areerattanawetch
                </div>
                <div className="text-lg md:text-xl font-semibold">
                    {title}
                </div>
                <div className="text-sm md:text-base text-gray-700">
                    {summary}
                </div>
            </div>
        </div>
    );
}
