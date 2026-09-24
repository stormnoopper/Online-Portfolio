export type SkillCategory = { title: string; items: string[] };

export type ExperienceItem = {
    company: string;
    position: string;
    period: string;
    bullets: string[];
};

export type AchievementItem = { title: string; description: string };

export const title = "QA Engineer | Full-stack Developer | Frontend Developer";

export const summary =
    "Computer Engineering student with hands-on experience in both quality assurance and web development. Proficient in manual, automated, API, and performance testing, and in building end-to-end web applications with Next.js, React, and Spring Boot (Java/Kotlin). Combines a developer's understanding of how systems are built with a tester's attention to edge cases, accessibility, and reliability — delivering software that is well-tested, maintainable, and user-friendly.";

export const experience: ExperienceItem[] = [
    {
        company: "ANYVET Co., Ltd.",
        position: "Quality Assurance Engineer",
        period: "Aug 2026 - Present",
        bullets: [
            "Designed and executed test cases covering functional, regression, and integration scenarios for web applications.",
            "Built and maintained automated browser test scripts for user flows and regression, reducing repetitive effort and speeding up release verification.",
            "Verified UI behaviour, form validation, rendering states, and API behaviour against design and functional specifications.",
            "Worked with developers to reproduce, debug, and verify defects across frontend and backend layers, and maintained up-to-date QA documentation.",
        ],
    },
    {
        company: "Ayodia Co., Ltd. (Intern)",
        position: "Software Tester",
        period: "May 2026 - July 2026",
        bullets: [
            "Executed manual functional, regression, and integration tests for web applications end to end.",
            "Performed API testing with Postman, verifying backend responses against expected contracts and how the frontend handled loading, empty, and error states.",
            "Tracked defects, verified fixes, and collaborated with developers to ensure product quality, while maintaining QA documentation.",
        ],
    },
    {
        company: "Smart Shift Solutions (Intern & Freelance)",
        position: "Full-stack Developer",
        period: "May 2025 - April 2026",
        bullets: [
            "Built an end-to-end CRM system with a Next.js frontend and Kotlin Spring Boot backend, covering UI, REST APIs, and database layer to improve client workflow efficiency.",
            "Implemented client-facing screens and workflows, integrating REST APIs and handling client-side state, routing, and data rendering.",
            "Researched and applied AI/Automation solutions to improve product features and system optimization.",
            "Delivered features across a year-long engagement, moving from internship to freelance contributor.",
        ],
    },
    {
        company: "National ITMX (Intern)",
        position: "Software Developer",
        period: "May 2024 - July 2024",
        bullets: [
            "Collaborated on high-scale web application development using Next.js and Java Spring Boot.",
            "Developed and executed test cases and test plans for web applications, documented bugs, and verified fixes before deployment.",
        ],
    },
];

export const skills: SkillCategory[] = [
    {
        title: "Testing",
        items: ["Manual Testing", "Test Case Design", "Test Planning", "Functional Testing", "Integration Testing", "Regression Testing", "API Testing", "Performance Testing", "Cross-browser Testing", "Accessibility Testing", "Bug Tracking"],
    },
    {
        title: "Automation & Testing Tools",
        items: ["Playwright (E2E)", "k6", "Robot Framework", "Postman", "Jira/Trello"],
    },
    {
        title: "Frontend",
        items: ["Next.js", "React", "JavaScript", "HTML", "CSS", "Responsive Layouts", "Component-based UI"],
    },
    {
        title: "Backend",
        items: ["Java Spring Boot", "Kotlin Spring Boot", "Golang", "Python", "REST API Design & Integration"],
    },
    {
        title: "Database & Infrastructure",
        items: ["SQL", "PostgreSQL", "MongoDB", "Supabase", "Docker", "Git", "GitHub", "GitLab"],
    },
    {
        title: "Process",
        items: ["Agile/Scrum", "SDLC", "STLC", "Defect Life Cycle", "Code Review", "Test & Technical Documentation"],
    },
    { title: "UX/UI Design", items: ["Figma", "Canva"] },
    {
        title: "IOT / Microcontroller",
        items: ["Arduino", "Esp32", "Raspberry Pi", "Sensors", "IoT Dashboard", "Streamlit", "MQTT"],
    },
];

export const achievements: AchievementItem[] = [
    {
        title: "Human Trafficking Case Reporting System [Collaboration with TATIP]",
        description:
            "Built and tested a secure web-based reporting platform — from the web interface to backend workflows — covering anonymous report submission, data dashboards, role-based access and views, AI case matching, and performance validation.",
    },
    {
        title: "BPF-Best [CU Coding Challenge 2024 | First Runner-up]",
        description:
            "Developed and validated a fund comparison platform with filtering, search, and side-by-side data views, verifying data mapping, calculation accuracy, edge cases, and overall user workflow reliability.",
    },
    {
        title: "Microsoft AI for Accessibility Hackathon 2024 (Finalist — Top 10 Teams)",
        description:
            "Designed and validated \"New Vision\" assistive glasses for the blind with a user-centered approach, covering user requirements, interaction design, functional reliability, and accessibility testing.",
    },
    {
        title: "TESA Top Gun Rally #18 (6th Place & Top Score Hardware Programming)",
        description:
            "Built and tested a predictive maintenance prototype, validating hardware-software integration and analysing machine sound data to present readable industrial insights.",
    },
    {
        title: "UNIHACK 2023 (Participant)",
        description: "Hackathon to Solve Community Problems, Designed a Community Waste Management System",
    },
];
