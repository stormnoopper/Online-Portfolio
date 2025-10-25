export default function Experience() {
    return (
        <div className="border border-black mt-12 w-11/12 md:w-10/12 mx-auto rounded-md">
            <div className="p-6 md:mx-12 md:my-10">
                <div className="font-bold text-2xl md:text-4xl mb-5 text-center md:text-left">
                    Experience
                </div>
                
                {/* First Experience */}
                <div className="mb-8">
                    <div className="font-semibold text-lg md:text-2xl ml-2 md:ml-5">
                        &#x2022; National ITMX (Intern) - Software Developer
                    </div>
                    <div className="text-sm md:text-lg ml-4 md:ml-10 mb-3">
                        May 2024 - July 2024
                    </div>
                    <div className="ml-6 md:ml-12 space-y-2">
                        <div className="text-sm md:text-base">
                            • Training work project website using Next.js with Golang and Java Spring Boot backend
                        </div>
                        <div className="text-sm md:text-base">
                            • Use Apache Kafka to support real-time data processing in mini project
                        </div>
                    </div>
                </div>

                {/* Second Experience */}
                <div>
                    <div className="font-semibold text-lg md:text-2xl ml-2 md:ml-5">
                        &#x2022; Smart Shift Solutions (Intern) - Full-stack developer
                    </div>
                    <div className="text-sm md:text-lg ml-4 md:ml-10 mb-3">
                        May 2025 - July 2025
                    </div>
                    <div className="ml-6 md:ml-12 space-y-2">
                        <div className="text-sm md:text-base">
                            • Collaborated in developing a CRM system for an external organization
                        </div>
                        <div className="text-sm md:text-base">
                            • Built the frontend with Next.js and the backend using Kotlin Spring Boot
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
