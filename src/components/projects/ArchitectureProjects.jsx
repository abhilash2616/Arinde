"use client";
import React, { useRef, useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const ArchitectureProjects = () => {
  const mainRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    { id: 1, image: "/assets/project/img-1.png" },
    { id: 2, image: "/assets/project/img-2.jpg" },
    { id: 3, image: "/assets/project/img-3.jpg" },
    { id: 4, image: "/assets/project/img-4.jpg" },
  ];

  useEffect(() => {
    if (mainRef.current && mainRef.current.splide) {
      mainRef.current.splide.on("move", (newIndex) => {
        setActiveIndex(newIndex);
      });
    }
  }, []);

  const handleThumbClick = (index) => {
    mainRef.current?.go(index);
    setActiveIndex(index);
  };

  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h3 className="text-[30px] font-medium text-[#B8B9B8] mb-4">
            Black And Orange Modern House Interior Design
          </h3>
          <div className="flex justify-center items-center gap-x-8">
            <div className="w-20 h-0.5 bg-[#D04713]"></div>
            <p className="text-[#B8B9B8] text-lg uppercase">ARCHITECTURE</p>
            <div className="w-20 h-0.5 bg-[#D04713]"></div>
          </div>
        </div>

        {/* Main Carousel */}
        <Splide
          ref={mainRef}
          options={{
            type: "loop",
            autoplay: true,
            interval: 4000,
            heightRatio: 0.6,
            pagination: false,
            arrows: true,
            cover: true,
          }}
          className="overflow-hidden"
        >
          {projects.map((project) => (
            <SplideSlide key={project.id}>
              <img
                src={project.image}
                alt={`Project ${project.id}`}
                className="w-full h-[500px] object-cover"
              />
            </SplideSlide>
          ))}
        </Splide>

        {/* Fixed Thumbnail Row (Centered) */}
        <div className="my-10 flex justify-center gap-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => handleThumbClick(index)}
              className={`cursor-pointer overflow-hidden border-2 transition-all duration-300 ${
                activeIndex === index
                  ? "border-[#D04713] scale-105 shadow-[0_0_15px_#D04713]"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={project.image}
                alt={`Thumbnail ${project.id}`}
                className="w-[230px] h-[150px] object-cover rounded"
              />
            </div>
          ))}
        </div>
        <p className="text-[#B8B9B8] text-center">
          “ Thank you for all of the beautiful ideas! We love it! Your interior
          design ideas are beautiful. We can't wait to complete the rest of the
          home.” - Olivia
        </p>
      </div>
    </div>
  );
};

export default ArchitectureProjects;
