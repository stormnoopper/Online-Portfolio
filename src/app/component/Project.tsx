"use client"
import { useEffect, useRef, useState } from "react";
import ProjectShow from "./ProjectShow";

export default function Project() {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const scrollStep = 1;
    const delay = 10;

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        function startAutoScroll() {
            if (scrollContainer && !isMouseOver) {
                scrollContainer.scrollLeft += scrollStep;

                // เลื่อนกลับไปจุดเริ่มต้นเมื่อถึงจุดสิ้นสุด
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                }
            }
        }

        const intervalId = setInterval(startAutoScroll, delay);

        return () => clearInterval(intervalId);
    }, [isMouseOver]);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft -= 200;
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += 200;
        }
    };

    const projects = [
        { imgSrc: "/pic/project1_1.png", title: "AppSome", projectLink: "/Project1" },
        { imgSrc: "/pic/project2_1.png", title: "Shopdee", projectLink: "/Project2" },
        { imgSrc: "/pic/project3_1.png", title: "Discord Gemini bot", projectLink: "/Project3" },
        { imgSrc: "/pic/project4_1.png", title: "BPF-Best Promotion for fund", projectLink: "/Project4" },
        { imgSrc: "/pic/project5_1.png", title: "Electronic large gong circle", projectLink: "/Project5" },
        { imgSrc: "/pic/project6_1.png", title: "Online Learning Assistant", projectLink: "/Project6" },
        { imgSrc: "/pic/project7_1.png", title: "Periodic Table Hunt", projectLink: "/Project7" },
        { imgSrc: "/pic/project1_1.png", title: "AppSome", projectLink: "/Project1" },
        { imgSrc: "/pic/project2_1.png", title: "Shopdee", projectLink: "/Project2" },
        { imgSrc: "/pic/project3_1.png", title: "Discord Gemini bot", projectLink: "/Project3" },
        { imgSrc: "/pic/project4_1.png", title: "BPF-Best Promotion for fund", projectLink: "/Project4" },
        { imgSrc: "/pic/project5_1.png", title: "Electronic large gong circle", projectLink: "/Project5" },
        { imgSrc: "/pic/project6_1.png", title: "Online Learning Assistant", projectLink: "/Project6" },
        { imgSrc: "/pic/project7_1.png", title: "Periodic Table Hunt", projectLink: "/Project7" },
        { imgSrc: "/pic/project1_1.png", title: "AppSome", projectLink: "/Project1" },
        { imgSrc: "/pic/project2_1.png", title: "Shopdee", projectLink: "/Project2" },
        { imgSrc: "/pic/project3_1.png", title: "Discord Gemini bot", projectLink: "/Project3" },
        { imgSrc: "/pic/project4_1.png", title: "BPF-Best Promotion for fund", projectLink: "/Project4" },
        { imgSrc: "/pic/project5_1.png", title: "Electronic large gong circle", projectLink: "/Project5" },
        { imgSrc: "/pic/project6_1.png", title: "Online Learning Assistant", projectLink: "/Project6" },
        { imgSrc: "/pic/project7_1.png", title: "Periodic Table Hunt", projectLink: "/Project7" },
        { imgSrc: "/pic/project1_1.png", title: "AppSome", projectLink: "/Project1" },
        { imgSrc: "/pic/project2_1.png", title: "Shopdee", projectLink: "/Project2" },
        { imgSrc: "/pic/project3_1.png", title: "Discord Gemini bot", projectLink: "/Project3" },
        { imgSrc: "/pic/project4_1.png", title: "BPF-Best Promotion for fund", projectLink: "/Project4" },
        { imgSrc: "/pic/project5_1.png", title: "Electronic large gong circle", projectLink: "/Project5" },
        { imgSrc: "/pic/project6_1.png", title: "Online Learning Assistant", projectLink: "/Project6" },
        { imgSrc: "/pic/project7_1.png", title: "Periodic Table Hunt", projectLink: "/Project7" },
    ];

    return (
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-3xl font-bold text-center mt-12">Project</div>
            <div
                className="relative"
                onMouseEnter={() => setIsMouseOver(true)}
                onMouseLeave={() => setIsMouseOver(false)}
            >
                {/* ปุ่มเลื่อน */}
                {isMouseOver && (
                    <>
                        <button
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-gray-600 p-1 rounded-full z-20 shadow-md opacity-70 hover:opacity-100 transition-opacity"
                            onClick={scrollLeft}
                        >
                            ◀
                        </button>
                        <button
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-gray-600 p-1 rounded-full z-20 shadow-md opacity-70 hover:opacity-100 transition-opacity"
                            onClick={scrollRight}
                        >
                            ▶
                        </button>
                    </>
                )}
                <div
                    className="scroll-hidden flex flex-nowrap overflow-x-auto space-x-4 mt-12 relative"
                    ref={scrollContainerRef}
                >
                    {projects.map((project, index) => (
                        <ProjectShow
                            key={index}
                            imgSrc={project.imgSrc}
                            title={project.title}
                            projectLink={project.projectLink}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
