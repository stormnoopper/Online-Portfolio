export default function Skills() {
    const skillCategories = [
        {
            title: "Testing",
            items: ["Manual Testing", "Test Case Design", "Test Planning", "Functional Testing", "Integration Testing", "Regression Testing", "API Testing", "Performance Testing", "Bug Tracking"],
        },
        {
            title: "Automation & Tools",
            items: ["Playwright", "k6", "Robot Framework", "Jira/Trello", "Postman", "GitHub", "GitLab", "Docker", "SQL"],
        },
        {
            title: "Programming",
            items: ["Java", "Spring Boot", "Next.js", "Golang", "Python", "Kotlin"],
        },
        {
            title: "QA Processes",
            items: ["Agile/Scrum", "SDLC", "STLC", "Defect Life Cycle", "Test Documentation"],
        },
        {
            title: "UX/UI Design",
            items: ["Figma", "Canva"],
        },
        {
            title: "Database",
            items: ["Supabase", "MongoDB", "PostgreSQL"],
        },
        {
            title: "IOT / Microcontroller",
            items: ["Arduino", "Esp32", "Raspberry Pi", "Sensors", "IoT Dashboard", "Streamlit", "MQTT"],
        },
    ];

    return (
        <div className="border border-black mt-12 w-11/12 md:w-10/12 mx-auto rounded-md">
            <div className="p-6 md:mx-12 md:my-10">
                <div className="font-bold text-2xl md:text-4xl mb-5 text-center md:text-left">
                    Skills
                </div>

                {skillCategories.map((category) => (
                    <div key={category.title} className="mb-6 last:mb-0">
                        <div className="font-semibold text-lg md:text-2xl ml-2 md:ml-5">
                            &#x2022; {category.title}
                        </div>
                        <div className="text-sm md:text-lg ml-4 md:ml-10">
                            {category.items.join(", ")}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
