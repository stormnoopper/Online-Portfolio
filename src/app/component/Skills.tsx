export default function Skills() {
    const skillCategories = [
        {
            title: "Web development",
            items: ["Python", "React", "Next.js", "Node.js", "Express.js", "Spring Boot [Kotlin]"],
        },
        {
            title: "UX/UI design",
            items: ["Figma"],
        },
        {
            title: "IOT/Microcontroller",
            items: ["Arduino", "Esp32", "Raspberry Pi", "Sensors", "IoT Dashboard", "Streamlit", "MQTT"],
        },
        {
            title: "Tools",
            items: ["Github", "Docker", "Canva", "Tinkercad", "Fusion"],
        },
        {
            title: "Database",
            items: ["Supabase", "MongoDB", "PostgreSQL"],
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
