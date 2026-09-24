import { achievements } from "@/app/data/profile";

export default function CompetitiveAcademic() {

    return (
        <div className="border border-black mt-12 w-11/12 md:w-10/12 mx-auto rounded-md">
            <div className="p-6 md:mx-12 md:my-10">
                <div className="font-bold text-2xl md:text-4xl mb-5 text-center md:text-left">
                    Projects &amp; Achievements
                </div>

                {achievements.map((item) => (
                    <div key={item.title}>
                        <div className="font-semibold text-lg md:text-2xl mt-4 ml-2 md:ml-5">
                            &#x2022; {item.title}
                        </div>
                        <div className="text-sm md:text-lg ml-4 md:ml-10 mb-1">
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
