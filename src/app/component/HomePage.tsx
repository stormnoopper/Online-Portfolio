import Image from "next/image";

export default function HomePage() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-28 my-16 md:my-48 px-4">
            <div className="relative aspect-square w-3/4 max-w-xs md:w-1/4 shrink-0 rounded-full overflow-hidden">
                <Image
                    src="/pic/mainPic.png"
                    alt="MainPicture"
                    fill
                    className="object-cover object-center"
                />
            </div>
            <div className="w-full md:w-auto flex flex-col gap-4 md:gap-3 text-center md:text-left">
                <div className="text-3xl md:text-5xl font-semibold">
                    Saroot Areerattanawetch
                </div>
                <div className="text-lg md:text-xl font-semibold">
                    Product Owner | Full-Stack Developer | IOT Developer
                </div>
                <div className="flex flex-row justify-center md:justify-start gap-4 items-center rounded">
                    <a href="/api/resume" target="_blank" rel="noopener noreferrer" className="bg-slate-300 px-6 py-3 md:px-8 md:py-3 font-semibold shadow-inherit text-lg md:text-xl rounded-md">
                        RESUME
                    </a>
                </div>
            </div>
        </div>
    );
}
