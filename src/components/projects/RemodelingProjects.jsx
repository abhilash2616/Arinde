import React from "react";
import { Link } from "react-router-dom";

const RemodelingProjects = () => {
  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4 overflow-hidden">
        <div className="text-center mb-12">
          <h3 className="text-[30px] font-medium text-[#B8B9B8] mb-4">
            Black Elegant Kitchen Design
          </h3>
          <div className="flex justify-center items-center gap-x-8">
            <div className="w-20 h-0.5 bg-[#D04713]"></div>
            <p className="text-[#B8B9B8] text-lg uppercase">INTERIOR</p>
            <div className="w-20 h-0.5 bg-[#D04713]"></div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Link to="/project/1">
            <div className="flex">
              <img src="/assets/project/img-7.png" alt="" width={500} height={500}  className="w-3xl h-full object-cover"/>
              <img src="/assets/project/img-8.png" alt="" width={500} height={500}  className="w-3xl h-full object-cover"/>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RemodelingProjects;
