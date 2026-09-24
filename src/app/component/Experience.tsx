import { experience } from "@/app/data/profile";

export default function Experience() {

    return (
        <div className="border border-black mt-12 w-11/12 md:w-10/12 mx-auto rounded-md">
            <div className="p-6 md:mx-12 md:my-10">
                <div className="font-bold text-2xl md:text-4xl mb-5 text-center md:text-left">
                    Experience
                </div>

                {experience.map((item) => (
                    <div key={item.company} className="mb-8 last:mb-0">
                        <div className="font-semibold text-lg md:text-2xl ml-2 md:ml-5">
                            &#x2022; {item.company} - {item.position}
                        </div>
                        <div className="text-sm md:text-lg ml-4 md:ml-10 mb-3">
                            {item.period}
                        </div>
                        <div className="ml-6 md:ml-12 space-y-2">
                            {item.bullets.map((bullet) => (
                                <div key={bullet} className="text-sm md:text-base">
                                    • {bullet}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
