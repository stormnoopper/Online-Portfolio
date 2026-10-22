import HomePage from "./component/HomePage";
import Navbar from "./component/Navbar";
import Section from "./component/Section";
import Experience from "./component/Experience";
import Skills from "./component/Skills";
import CompetitiveAcademic from "./component/CompetitiveAcademic";
import Project from "./component/Project";
import Education from "./component/Education";
import Contact from "./component/Contact";

export default function Home() {
    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-900">
            <Navbar />
            <main className="mx-auto max-w-5xl px-5 sm:px-8">
                <section id="home">
                    <HomePage />
                </section>
                <Section id="experience" title="Experience">
                    <Experience />
                </Section>
                <Section id="skills" title="Skills">
                    <Skills />
                </Section>
                <Section id="achievements" title="Achievements">
                    <CompetitiveAcademic />
                </Section>
                <Section id="project" title="Projects">
                    <Project />
                </Section>
                <Section id="education" title="Education">
                    <Education />
                </Section>
                <Section id="contact" title="Contact">
                    <Contact />
                </Section>
            </main>
            <footer className="mx-auto max-w-5xl border-t border-zinc-200 px-5 py-8 text-sm text-zinc-500 sm:px-8">
                © {new Date().getFullYear()} Saroot Areerattanawetch
            </footer>
        </div>
    );
}
