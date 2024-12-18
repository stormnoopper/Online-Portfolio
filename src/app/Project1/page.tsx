"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectImage: React.FC = () => {
  const images: string[] = [
    "/pic/project1_1.png",
    "/pic/project1_2.png",
    "/pic/project1_3.png",
    "/pic/project1_4.png",
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
      <div className="text-xl sm:text-2xl font-bold">Appsom</div>
      {/* Description */}
      <div className="mt-2 ml-0 sm:ml-2 text-lg sm:text-xl">
        This is my National ITMX Intern project about a task management website built with a pure Next.js frontend that uses JSON to store data.
      </div>
      {/* Button */}
      <div className="flex flex-row w-full sm:w-min gap-4 items-center rounded">
        <Link href={"https://github.com/AppSom/AppSom"}>
          <div className="bg-slate-300 px-4 sm:px-5 py-2 my-5 font-semibold shadow-inherit text-lg sm:text-xl rounded-md text-center">Github</div>
        </Link>
      </div>
    </div>
  );
};

const Project1: React.FC = () => {
  return (
    <div className="relative flex flex-col sm:flex-row items-center sm:items-start justify-center pt-10 sm:pt-20 px-4">
      <ProjectImage />
      <ProjectDescription/>
    </div>
  );
};

export default Project1;
