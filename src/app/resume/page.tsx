"use client";
import React, { useState, useEffect } from "react";

const ResumeSection: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="resume" className="w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
      <div className="w-full h-96 sm:h-[400px] md:h-[500px] lg:h-[600px] border border-gray-300 rounded-lg shadow-md overflow-hidden">
        {isClient ? (
          <iframe src="/resume.pdf" title="Resume" className="w-full h-full" allowFullScreen>
            Your browser does not support PDFs.
            <a href="/resume.pdf" className="text-blue-500 underline ml-1">Download the PDF</a>
          </iframe>
        ) : (
          <div className="flex justify-center items-center h-full">
            <p className="text-gray-500">Loading...</p>
          </div>
        )}
      </div>
      <div className="mt-4 text-center">
        <a
          href="/resume.pdf"
          download
          className="inline-block px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default ResumeSection;
