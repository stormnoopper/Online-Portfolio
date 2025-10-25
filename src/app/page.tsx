"use client";

import React from "react";
import dynamic from "next/dynamic";
import HomePage from "@/app/component/HomePage";
import Education from "./component/Education";
import Experience from "./component/Experience";
import Project from "./component/Project";
import Contact from "./component/Contact";
import CompetitiveAcademic from "./component/CompetitiveAcademic";
import JumpButton from "./component/JumpButton";

const Home: React.FC = () => {
  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="flex flex-col justify-center items-center gap-12 px-4 py-8">
        {/* HomePage Section */}
        <section id="home" className="w-full max-w-7xl">
          <HomePage />
        </section>

        {/* Education Section */}
        <section id="education" className="w-full max-w-7xl">
          <Education />
        </section>

        {/* Experience Section */}
        <section id="experience" className="w-full max-w-7xl">
          <Experience />
        </section>

        {/* Competitive Academic Section */}
        <section id="competitive-academic" className="w-full max-w-7xl">
          <CompetitiveAcademic />
        </section>

        {/* Project Section */}
        <section id="project" className="w-full max-w-7xl">
          <Project />
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full max-w-7xl">
          <Contact />
        </section>
      </div>
      
      {/* Jump Button */}
      <JumpButton />
    </main>
  );
};

export default Home;
