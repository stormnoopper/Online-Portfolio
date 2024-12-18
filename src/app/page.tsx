import HomePage from "@/app/component/HomePage";
import Education from "./component/Education";
import Experience from "./component/Experience";
import Project from "./component/Project";
import Contact from "./component/Contact";
import CompetitiveAcademic from "./component/CompetitiveAcademic";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="flex flex-col justify-center items-center gap-12">
        {/* HomePage Section */}
        <section id="home" className="w-full">
          <HomePage />
        </section>

        {/* Education Section */}
        <section id="education" className="w-full">
          <Education />
        </section>

        {/* Experience Section */}
        <section id="experience" className="w-full">
          <Experience />
        </section>

        {/* Competitive Academic Section */}
        <section id="competitive-academic" className="w-full">
          <CompetitiveAcademic />
        </section>

        {/* Project Section */}
        <section id="project" className="w-full">
          <Project />
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full">
          <Contact />
        </section>
      </div>
    </main>
  );
}
