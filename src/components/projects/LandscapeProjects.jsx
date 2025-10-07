import React from "react";
import { Link } from "react-router-dom";

const LandscapeProjects = () => {

  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-[30px] font-medium text-[#B8B9B8] mb-4">
          Modern House And Landscape Design
          </h3>
          <div className="flex justify-center items-center gap-x-8">
            <div className="w-20 h-0.5 bg-[#D04713]"></div>
            <p className="text-[#B8B9B8] text-lg uppercase">LANDSCAPE</p>
            <div className="w-20 h-0.5 bg-[#D04713]"></div>
          </div>
        </div>

        <div className="">
          <Link to="/project/1">
            <img src="/assets/project/img-6.png" alt="Modern House And Landscape Design" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandscapeProjects;
