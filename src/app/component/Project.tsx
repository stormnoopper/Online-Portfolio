"use client"
import { useEffect, useRef } from "react";
import ProjectShow from "./ProjectShow";

export default function Project() {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        let scrollAmount = 0;
        const scrollStep = 1;
        const delay = 30;

        function startAutoScroll() {
            if (scrollContainer) {
                scrollAmount += scrollStep;
                scrollContainer.scrollLeft = scrollAmount;

                if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                    scrollAmount = 0;
                }
            }
        }

        const intervalId = setInterval(startAutoScroll, delay);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <div className="text-3xl font-bold text-center mt-12">Project</div>
            <div
                className="scroll-hidden flex flex-nowrap overflow-x-auto space-x-4 mt-12 mx-10"
                ref={scrollContainerRef}
            >
                <ProjectShow imgSrc="/pic/project1_1.png" title="AppSome" projectLink="/Project1" />
                <ProjectShow imgSrc="/pic/project2_1.png" title="Shopdee" projectLink="/Project2" />
                <ProjectShow imgSrc="/pic/project3_1.png" title="Discord Gemini bot" projectLink="/Project3" />
                <ProjectShow imgSrc="/pic/project4_1.png" title="BPF-Best Promotion for fund" projectLink="/Project4" />
                <ProjectShow imgSrc="/pic/project5_1.png" title="Electronic large gong circle" projectLink="/Project5" />
                <ProjectShow imgSrc="/pic/project6_1.png" title="Online Learning Assistant" projectLink="/Project6" />
                <ProjectShow imgSrc="/pic/project7_1.png" title="Periodic Table Hunt" projectLink="/Project7" />
            </div>
        </div>
    );
}
