import { projects } from "@/app/data/profile";
import ProjectShow from "./ProjectShow";

export default function Project() {
    return (
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-5">
            {projects.map((project) => (
                <ProjectShow
                    key={project.projectLink}
                    imgSrc={project.imgSrc}
                    title={project.title}
                    projectLink={project.projectLink}
                />
            ))}
        </div>
    );
}
