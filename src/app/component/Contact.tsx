import Link from "next/link";
import Image from "next/image";

export default function Contact() {
    return (
        <div className="flex flex-col items-center mb-24">
            <div className="text-2xl md:text-3xl font-bold text-center mt-12">
                Contact
            </div>
            <div className="border border-black mt-12 w-11/12 md:w-10/12 rounded-md flex flex-col md:flex-row py-5 px-4 justify-center items-center gap-4 md:gap-6">
                {/* Gmail */}
                <div className="flex items-center">
                    <Image
                        height={1000}
                        width={1000} 
                        src="/pic/gmail.png" 
                        alt="Gmail Icon" 
                        className="rounded-full w-8 h-8 md:w-10 md:h-10 mx-2 border" 
                    />
                    <Link href="mailto:saroot.nae@gmail.com">
                        <div className="font-semibold text-lg md:text-2xl mx-2">
                            saroot.nae@gmail.com
                        </div>
                    </Link>
                </div>

                {/* GitHub */}
                <div className="flex items-center">
                    <Image
                        height={1000}
                        width={1000} 
                        src="/pic/github.png" 
                        alt="GitHub Icon" 
                        className="rounded-full w-8 h-8 md:w-10 md:h-10 mx-2" 
                    />
                    <Link href="https://github.com/stormnoopper">
                        <div className="font-semibold text-lg md:text-2xl mx-2">
                            GitHub
                        </div>
                    </Link>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center">
                    <Image
                        height={1000}
                        width={1000} 
                        src="/pic/linkdin.png" 
                        alt="LinkedIn Icon" 
                        className="rounded-full w-8 h-8 md:w-10 md:h-10 mx-2" 
                    />
                    <Link href="https://www.linkedin.com/in/saroot-fed/">
                        <div className="font-semibold text-lg md:text-2xl mx-2">
                            LinkedIn
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
