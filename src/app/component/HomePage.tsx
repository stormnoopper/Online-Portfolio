import Link from "next/link"

export default function HomePage(){
    return(
        <div className="flex flex-row items-center justify-center gap-28 my-48">
            <img src="/pic/mainpic.png" alt="" className="rounded-full w-1/4"/>
            <div className="w-min flex flex-col gap-2">
                <div className="text-5xl font-semibold">Saroot Areerattanawetch</div>
                <div className="text-xl font-semibold">Full-Stack Developer</div>
                <div className="flex flex-row w-min gap-4 items-center rounded">
                    <Link href={"/resume.pdf"}>
                        <div className="bg-slate-300 px-8 py-3 font-semibold shadow-inherit h-min text-xl rounded-md">RESUME</div>
                    </Link>
                </div>
            </div>
      </div>
    )
}