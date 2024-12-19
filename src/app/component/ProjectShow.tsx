import Image from "next/image";
export default function ProjectShow({ imgSrc, title, projectLink }: { imgSrc: string; title: string; projectLink: string }) {
    return (
        <a
            href={projectLink}
            className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mx-2 sm:mx-3 lg:mx-5 flex flex-col py-5 items-center
            transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden"
        >
            <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                <Image 
                    height={1000}
                    width={1000}
                    src={imgSrc}
                    alt={title}
                    className="w-3/4 rounded-xl mb-4" />
            </div>
            <div className="font-semibold text-lg sm:text-xl md:text-2xl text-center">{title}</div>
        </a>
    );
}
