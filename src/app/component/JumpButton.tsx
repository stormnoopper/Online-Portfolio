"use client";

import React, { useState, useEffect, useMemo } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const JumpButton: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const sections = useMemo(() => [
    "home",
    "education", 
    "experience",
    "competitive-academic",
    "project",
    "contact"
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      // Find which section is currently in view
      let activeSection = 0;
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((sectionId, index) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          // Check if the scroll position is within this section
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            activeSection = index;
          }
        }
      });
      
      // Additional check: if we're near the bottom of the page, assume we're on the last section
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      
      if (scrollTop + windowHeight >= documentHeight - 100) {
        activeSection = sections.length - 1; // Last section
      }
      
      setCurrentSection(activeSection);
      
      // Debug: log current section
      console.log('Current section:', activeSection, 'of', sections.length - 1);
      
      // Show button always (for top jump functionality)
      setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToNextSection = () => {
    if (currentSection === sections.length - 1) {
      // If at the last section, scroll to top
      const homeSection = document.getElementById(sections[0]);
      if (homeSection) {
        homeSection.scrollIntoView({ 
          behavior: "smooth",
          block: "start"
        });
      }
    } else {
      // Scroll to next section
      const nextSectionIndex = currentSection + 1;
      const nextSection = document.getElementById(sections[nextSectionIndex]);
      if (nextSection) {
        nextSection.scrollIntoView({ 
          behavior: "smooth",
          block: "start"
        });
      }
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToNextSection}
      className="fixed bottom-8 right-8 z-50 bg-black hover:bg-gray-800 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-gray-300"
      aria-label={currentSection < sections.length - 1 ? "Scroll to next section" : "Scroll to top"}
    >
      {currentSection < sections.length - 1 ? (
        <KeyboardArrowDownIcon className="w-6 h-6" />
      ) : (
        <KeyboardArrowUpIcon className="w-6 h-6" />
      )}
    </button>
  );
};

export default JumpButton;
