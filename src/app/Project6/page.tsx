"use client";
import React, { useState } from "react";
import Link from "next/link";

const ProjectImage: React.FC = () => {
  const images: string[] = [
    "/pic/project6_1.png",
    "/pic/project6_2.png",
    "/pic/project6_3.png",
    "/pic/project6_4.png",
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
      <div className="text-2xl font-bold">Online learning assistance</div>
      {/* Description */}
      <div className="mt-2 ml-2 text-xl">
        This project originated during the COVID-19 pandemic, which obstructed onsite learning. Recognizing the problem that students might not be fully engaged in remote learning. Therefore, I developed this project to address this issue by checking students from the screen during online classes.      
      </div>
      <div className="mt-2 ml-2 text-xl">
        Online learning assistance project was created by using Python for implementing the Face-Detection system and GUI. For the front-end, website display uses HTML, CSS, and JavaScript. At that time, I was no knowledge in back-end development and databases, so Google Sheet was used for data storage.      
      </div>
      {/* Button */}
      <div className="flex flex-row gap-5">
        <div className="flex flex-row w-max gap-4 items-center rounded">
          <Link href={"https://github.com/LifeWithM150/Online-Leaning-Assistant"}>
              <div className="bg-slate-300 px-5 py-2 my-5 font-semibold shadow-inherit h-min text-xl rounded-md">Github</div>
          </Link>
        </div>
        <div className="flex flex-row w-max gap-4 items-center rounded">
          <Link href={"https://www.youtube.com/watch?v=jRYFySsDO0w&t=5s"}>
              <div className="bg-slate-300 px-5 py-2 my-5 font-semibold shadow-inherit h-min text-xl rounded-md">Presentation</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Project6: React.FC = () => {
  return (
    <div className="flex flex-row items-start justify-center pt-20">
      <ProjectImage />
      <ProjectDescription />
    </div>
  );
};

export default Project6;
