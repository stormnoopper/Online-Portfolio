"use client";
import React, { useState } from "react";
import Link from "next/link";

const ProjectImage: React.FC = () => {
  const images: string[] = [
    "/pic/project3_1.png",
    "/pic/project3_2.png",
    "/pic/project3_3.png",
    "/pic/project3_4.png",
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
      <div className="text-2xl font-bold">Discord Gemini bot</div>
      {/* Description */}
      <div className="mt-2 ml-2 text-xl">
        This is my National ITMX Intern project that is Discord bot built with the Gemini 1.5 API in Golang, allowing for direct conversations in Discord.
      </div>
      {/* Button */}
      <div className="flex flex-row w-min gap-4 items-center rounded">
        <Link href={"https://github.com/Peakied-org"}>
            <div className="bg-slate-300 px-5 py-2 my-5 font-semibold shadow-inherit h-min text-xl rounded-md">Github</div>
        </Link>
      </div>
    </div>
  );
};

const Project3: React.FC = () => {
  return (
    <div className="flex flex-row items-start justify-center pt-20">
      <ProjectImage />
      <ProjectDescription />
    </div>
  );
};

export default Project3;
