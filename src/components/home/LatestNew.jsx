import React from "react";
import { Link } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";

const Update = [
  {
    title: "20+ Mountain House Ideas",
    img: "/assets/blog/blog-1.webp",
    date: "15 July 2024",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since.",
    link: "/project/1",
  },
  {
    title: "5 Steps Bedroom Makeover",
    img: "/assets/blog/blog-2.webp",
    date: "20 July 2024",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since.",
    link: "/project/2",
  },
  {
    title: "Interior Design Trending Now",
    img: "/assets/blog/blog-3.webp",
    date: "25 July 2024",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since.",
    link: "/project/3",
  },
];

const LatestNew = () => {
  return (
    <div className="flex flex-wrap justify-between gap-4">
      {Update.map((item, index) => (
        <div key={index} className="w-full md:w-[30%]">
          <div className="flex flex-col gap-4">
            <h3 className="text-[20px] font-medium text-white">{item.title}</h3>
            <div className="relative group w-full h-auto overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Link to={item.link}>
                  <button className="px-4 py-2 bg-[#00000075] text-white font-semibold rounded-lg shadow-lg hover:bg-gray-900 hover:cursor-pointer hover:text-[#D04713] transition-colors duration-300">
                    View More
                  </button>
                </Link>
              </div>
            </div>
            <p className="text-[16px] font-semibold text-[#B8B9B8] flex items-center gap-2">
              <FaRegCalendarAlt className="text-[#D04713]" /> {item.date}
            </p>

            <p className="text-[16px] text-[#B8B9B8]">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestNew;
