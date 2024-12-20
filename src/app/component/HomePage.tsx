import Image from "next/image";

export default function HomePage() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-28 my-16 md:my-48 px-4">
            <Image
                width={1000}
                height={1000}
                src="/pic/mainPic.png"
                alt="MainPicture"
                className="rounded-full w-3/4 md:w-1/4"
            />
            <div className="w-full md:w-auto flex flex-col gap-4 md:gap-3 text-center md:text-left">
                <div className="text-3xl md:text-5xl font-semibold">
                    Saroot Areerattanawetch
                </div>
                <div className="text-lg md:text-xl font-semibold">
                    Full-Stack Developer
                </div>
                <div className="flex flex-row justify-center md:justify-start gap-4 items-center rounded">
                    <a href="https://pdfupload.io/docs/319aac09" target="_blank" rel="noopener noreferrer" className="bg-slate-300 px-6 py-3 md:px-8 md:py-3 font-semibold shadow-inherit text-lg md:text-xl rounded-md">
                        RESUME
                    </a>
                </div>
            </div>
        </div>
    );
}
