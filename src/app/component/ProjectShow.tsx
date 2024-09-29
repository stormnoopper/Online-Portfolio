export default function ProjectShow({ imgSrc, title , projectLink }:{imgSrc:string, title:string,projectLink:string}) {
    return (
        <a href={projectLink} className="border border-black rounded-lg flex-shrink-0 w-2/6 mx-5 flex flex-col py-5 items-center">
            <img src={imgSrc} alt="" className="w-3/4 rounded-2xl mb-4"/>
            <div className="font-semibold text-2xl">{title}</div>
        </a>
    );
}