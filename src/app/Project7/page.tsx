"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectImage: React.FC = () => {
  const images: string[] = [
    "/pic/project7_1.png",
    "/pic/project7_2.png",
    "/pic/project7_3.png",
    "/pic/project7_4.png",
  ];
  const [mainImage, setMainImage] = useState<string>(images[0]);

  const handleImageClick = (image: string): void => {
    setMainImage(image);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full sm:w-1/3 relative">
      {/* Back to Home Button Positioned Above Image */}
      <div className="w-full mb-2 sm:mb-4">
        <Link href="/">
          <button className="bg-slate-300 px-4 sm:px-5 py-2 font-semibold shadow text-sm sm:text-lg rounded-md">
            Back to Home
          </button>
        </Link>
      </div>

      {/* Main Image */}
      <div className="mb-4 w-full flex justify-center">
        <Image
          width={1000}
          height={1000}
          src={mainImage}
          alt="Main"
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex space-x-2 sm:space-x-4 justify-center">
        {images.map((image, index) => (
          <Image
            width={1000}
            height={1000}
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleImageClick(image)}
            className={`w-[40px] sm:w-[50px] h-auto object-cover cursor-pointer rounded-md transition-opacity duration-300 ${
              mainImage === image ? "opacity-100" : "opacity-60 hover:opacity-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectDescription: React.FC = () => {
  return (
    <div className="w-full sm:w-2/3 max-w-xl mt-6 sm:mt-0 sm:ml-6 px-4 sm:px-0 pt-14">
      {/* Name */}
      <div className="text-xl sm:text-2xl font-bold">Periodic Table Hunt</div>
      {/* Description */}
      <div className="mt-2 ml-0 sm:ml-2 text-lg sm:text-xl">
        This project is a game designed to practice memorizing elements on the periodic table within a limited time. It serves as a supplementary tool for studying chemistry, making the process of memorizing elements more engaging and enjoyable.
      </div>
      <div className="mt-2 ml-0 sm:ml-2 text-lg sm:text-xl">
        Periodic Table Hunt was created using HTML, CSS, and JavaScript for front-end web development. MongoDB is used for database management and the back-end. The deployment process is done through EC2.
      </div>
      {/* Buttons */}
      <div className="flex flex-row gap-5 mt-5">
        <Link href="https://github.com/F2CEDT-G37/Periodic-Table-Hunt">
          <div className="bg-slate-300 px-4 sm:px-5 py-2 font-semibold shadow-inherit text-lg sm:text-xl rounded-md text-center">Github</div>
        </Link>
        <Link href="https://periodic-table-hunt.onrender.com/">
          <div className="bg-slate-300 px-4 sm:px-5 py-2 font-semibold shadow-inherit text-lg sm:text-xl rounded-md text-center">Demo</div>
        </Link>
      </div>
    </div>
  );
};

const Project7: React.FC = () => {
  return (
    <div className="relative flex flex-col sm:flex-row items-center sm:items-start justify-center pt-10 sm:pt-20 px-4">
      <ProjectImage />
      <ProjectDescription />
    </div>
  );
};

export default Project7;
