import HomePage from "@/app/component/HomePage";
import Education from "./component/Education";
import Experience from "./component/Experience";
import Project from "./component/Project";
import Contact from "./component/Contact";
import CompetitiveAcademice from "./component/CompetitiveAcademic";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center">
        <HomePage />
        <Education/>
        <Experience/>
        <CompetitiveAcademice/>
        <Project/>
        <Contact/>
      </div>
    </main>
  );
}
