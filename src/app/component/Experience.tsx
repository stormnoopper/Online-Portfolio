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
                            • Collaborated on high-scale web application development using Next.js, and Java Spring Boot
                        </div>
                        <div className="text-sm md:text-base">
                            • Developed and executed test cases and test plans for web applications, documented bugs, and verified fixes before deployment.
                        </div>
                    </div>
                </div>

                {/* Second Experience */}
                <div className="mb-8">
                    <div className="font-semibold text-lg md:text-2xl ml-2 md:ml-5">
                        &#x2022; Smart Shift Solutions (Intern & Freelance) - Full-stack Developer
                    </div>
                    <div className="text-sm md:text-lg ml-4 md:ml-10 mb-3">
                        May 2025 - April 2026
                    </div>
                    <div className="ml-6 md:ml-12 space-y-2">
                        <div className="text-sm md:text-base">
                            • Researched AI/Automation solutions to improve product features and system optimization.
                        </div>
                        <div className="text-sm md:text-base">
                            • Developed an end-to-end CRM system using Next.js and Kotlin Spring Boot to improve client workflow efficiency.
                        </div>
                    </div>
                </div>

                {/* Third Experience */}
                <div>
                    <div className="font-semibold text-lg md:text-2xl ml-2 md:ml-5">
                        &#x2022; Ayodia Co.,LTD (Intern) - Software Tester
                    </div>
                    <div className="text-sm md:text-lg ml-4 md:ml-10 mb-3">
                        May 2026 - July 2026
                    </div>
                    <div className="ml-6 md:ml-12 space-y-2">
                        <div className="text-sm md:text-base">
                            • Executed manual functional, regression, and integration tests for web applications.
                        </div>
                        <div className="text-sm md:text-base">
                            • Tracked defects, verified fixes, and collaborated with developers to ensure product quality.
                        </div>
                        <div className="text-sm md:text-base">
                            • Performed API testing and maintained QA documentation.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
