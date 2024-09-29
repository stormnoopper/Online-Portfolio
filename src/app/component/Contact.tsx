import Link from "next/link"

export default function Contact(){
    return(
        <div className="flex flex-col items-center mb-24">
            <div className="text-3xl font-bold text-center mt-12">Contact</div>
            <div className="border border-black mt-12 w-10/12 rounded-md flex flex-row py-5 justify-center items-center">
                <img src="/pic/gmail.png" alt="" className="rounded-full w-[5%] h-[5%] mx-2 border"/>
                <Link href="mailto:saroot.nae@gmail.com">
                    <div className="font-semibold text-2xl mx-2">saroot.nae@gmail.com</div>
                </Link>
                <img src="/pic/github.png" alt="" className="rounded-full w-[5%] h-[5%] mx-2"/>
                <Link href="https://github.com/stormnoopper">
                    <div className="font-semibold text-2xl mx-2">github</div>
                </Link>
                <img src="/pic/linkdin.png" alt="" className="rounded-full w-[5%] h-[5%] mx-2"/>
                <Link href="https://www.linkedin.com/in/saroot-fed/">
                    <div className="font-semibold text-2xl mx-2">Linkedin</div>
                </Link>
            </div>
        </div>
    )
}