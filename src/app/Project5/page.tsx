"use client";
import React, { useState } from "react";
import Link from "next/link";

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
    <div className="flex flex-col items-center justify-center w-1/3">
      {/* Main image display */}
      <div className="mb-4 w-full flex justify-center">
        <img
          src={mainImage}
          alt="Main"
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>
      {/* Thumbnails */}
      <div className="flex space-x-4 justify-center">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleImageClick(image)}
            className={`w-[50px] h-auto object-cover cursor-pointer rounded-md transition-opacity duration-300 ${
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
    <div className="w-2/3 max-w-xl ml-6">
      {/* Name */}
      <div className="text-2xl font-bold">Electronic large gong circle</div>
      {/* Description */}
      <div className="mt-2 ml-2 text-xl">
         This project is my high school project.Electronic large gong circle is one of the Thai percussion instruments makes various sounds when struck according to different notes. I have created it in a new format by using a plastic framework and an Arduino circuit.
      </div>
      <div className="mt-2 ml-2 text-xl">
         Electronic Large Gong Circle was created by using Arduino Board, along with the C++ programming language and 3D design for the structure. Additionally, MIT App Inventor will be used to develop the connecting app.
      </div>
      {/* Button */}
      <div className="flex flex-row gap-5">
        <div className="flex flex-row w-max gap-4 items-center rounded">
          <Link href={"https://github.com/LifeWithM150/Electronic-large-gong-circle"}>
              <div className="bg-slate-300 px-5 py-2 my-5 font-semibold shadow-inherit h-min text-xl rounded-md">Github</div>
          </Link>
        </div>
        <div className="flex flex-row w-max gap-4 items-center rounded">
          <Link href={"https://search.ipthailand.go.th/index2?q=JTdCJTIycSUyMiUzQSUyMiVFMCVCOCU4NiVFMCVCOSU4OSVFMCVCOCVBRCVFMCVCOCU4NyVFMCVCOCVBNyVFMCVCOCU4NyVFMCVCOSU4MyVFMCVCOCVBQiVFMCVCOCU4RCVFMCVCOSU4OCVFMCVCOSU4NCVFMCVCOCU5RiVFMCVCOCU5RiVFMCVCOSU4OSVFMCVCOCVCMiUyMiUyQyUyMmluZGV4JTIyJTNBJTIyZGlwX3NlYXJjaF8xX2VwdF8zJTIyJTJDJTIyZGlzcGxheSUyMiUzQSUyMmRpcF9zZWFyY2hfMV9lcHRfMyUyMiUyQyUyMmluZGV4X2NyZWF0ZSUyMiUzQSUyMmRpcF9zZWFyY2hfMV9lcHRfMyUyMiUyQyUyMmluJTIyJTNBMSUyQyUyMm9yZGVyJTIyJTNBJTIyX3Njb3JlJTJDZGVzYyUyMiUyQyUyMnR5cGUlMjIlM0ElMjJzZWFyY2hfYWxsJTIyJTJDJTIydHlwZV9uYW1lJTIyJTNBJTIyJUUwJUI4JUFEJUUwJUI4JTk5JUUwJUI4JUI4JUUwJUI4JUFBJUUwJUI4JUI0JUUwJUI4JTk3JUUwJUI4JTk4JUUwJUI4JUI0JUUwJUI4JTlBJUUwJUI4JUIxJUUwJUI4JTk1JUUwJUI4JUEzJTIyJTJDJTIydGFiX2luZGV4JTIyJTNBJTIyZGlwX3NlYXJjaF8xX2VwdF8zJTIyJTdE"}>
              <div className="bg-slate-300 px-5 py-2 my-5 font-semibold shadow-inherit h-min text-xl rounded-md">Petty Patent</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Project5: React.FC = () => {
  return (
    <div className="flex flex-row items-start justify-center pt-20">
      <ProjectImage />
      <ProjectDescription />
    </div>
  );
};

export default Project5;
