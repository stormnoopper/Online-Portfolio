"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectImage: React.FC = () => {
  const images: string[] = [
    "/pic/project5_1.png",
    "/pic/project5_2.png",
    "/pic/project5_3.png",
    "/pic/project5_4.png",
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
      <div className="text-xl sm:text-2xl font-bold">Electronic Large Gong Circle</div>
      {/* Description */}
      <div className="mt-2 ml-0 sm:ml-2 text-lg sm:text-xl">
        This project is my high school project. The Electronic Large Gong Circle is one of the Thai percussion instruments that makes various sounds when struck according to different notes. I have created it in a new format by using a plastic framework and an Arduino circuit.
      </div>
      <div className="mt-2 ml-0 sm:ml-2 text-lg sm:text-xl">
        Electronic Large Gong Circle was created by using an Arduino Board, along with the C++ programming language and 3D design for the structure. Additionally, MIT App Inventor was used to develop the connecting app.
      </div>
      {/* Buttons */}
      <div className="flex flex-row gap-5 mt-5">
        <Link href="https://github.com/LifeWithM150/Electronic-large-gong-circle">
          <div className="bg-slate-300 px-4 sm:px-5 py-2 font-semibold shadow-inherit text-lg sm:text-xl rounded-md text-center">Github</div>
        </Link>
        <Link href="https://search.ipthailand.go.th/index2?q=JTdCJTIycSUyMiUzQSUyMiVFMCVCOCU4NiVFMCVCOSU4OSVFMCVCOCVBRCVFMCVCOCU4NyVFMCVCOCVBNyVFMCVCOCU4NyVFMCVCOSU4MyVFMCVCOCVBQiVFMCVCOCU4RCVFMCVCOSU4OCVFMCVCOSU4NCVFMCVCOCU5RiVFMCVCOCU5RiVFMCVCOSU4OSVFMCVCOCVCMiUyMiUyQyUyMmluZGV4JTIyJTNBJTIyZGlwX3NlYXJjaF8xX2VwdF8zJTIyJTJDJTIyZGlzcGxheSUyMiUzQSUyMmRpcF9zZWFyY2hfMV9lcHRfMyUyMiUyQyUyMmluZGV4X2NyZWF0ZSUyMiUzQSUyMmRpcF9zZWFyY2hfMV9lcHRfMyUyMiUyQyUyMmluJTIyJTNBMSUyQyUyMm9yZGVyJTIyJTNBJTIyX3Njb3JlJTJDZGVzYyUyMiUyQyUyMnR5cGUlMjIlM0ElMjJzZWFyY2hfYWxsJTIyJTJDJTIydHlwZV9uYW1lJTIyJTNBJTIyJUUwJUI4JUFEJUUwJUI4JTk5JUUwJUI4JUI4JUUwJUI4JUFBJUUwJUI4JUI0JUUwJUI4JTk3JUUwJUI4JTk4JUUwJUI4JUI0JUUwJUI4JTlBJUUwJUI4JUIxJUUwJUI4JTk1JUUwJUI4JUEzJTIyJTJDJTIydGFiX2luZGV4JTIyJTNBJTIyZGlwX3NlYXJjaF8xX2VwdF8zJTIyJTdE">
          <div className="bg-slate-300 px-4 sm:px-5 py-2 font-semibold shadow-inherit text-lg sm:text-xl rounded-md text-center">Petty Patent</div>
        </Link>
      </div>
    </div>
  );
};

const Project5: React.FC = () => {
  return (
    <div className="relative flex flex-col sm:flex-row items-center sm:items-start justify-center pt-10 sm:pt-20 px-4">
      <ProjectImage />
      <ProjectDescription />
    </div>
  );
};

export default Project5;
