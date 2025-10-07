import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const services = [
  {
    img: "/assets/about/team-1.webp",
    name: "Chris Jobling",
    desc: "ARCHITECT",
  },
  {
    img: "/assets/about/team-2.webp",
    name: "Lara Smith",
    desc: "DESIGNER",
  },
  {
    img: "/assets/about/team-3.webp",
    name: "Chris Evan",
    desc: "ARCHITECT",
  },
];

const TeamsCard = () => {
  return (
    <div className="w-full">
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          interval: 4000,
          gap: "2rem",
          arrows: true,
          pagination: false,
          perPage: 3,
          breakpoints: {
            1024: { perPage: 2 },
            768: { perPage: 1 },
          },
        }}
      >
        {services.map((service, index) => (
          <SplideSlide key={index}>
            <div className="relative group overflow-hidden transition-transform duration-500">
              <img
                src={service.img}
                alt={service.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute w-[70%] h-28 bottom-0 flex flex-col items-center justify-center gap-y-4 left-0 right-0 mx-auto bg-[#131412] px-6 py-4 opacity-0 rotate-90 transition-all duration-500 group-hover:opacity-100 group-hover:rotate-0">
                <h3 className="text-[25px] tracking-wide font-medium text-[#B8B9B8]">
                  {service.name}
                </h3>
                <div className="flex flex-wrap items-center gap-x-4">
                  <p className="text-sm text-[#D04713] uppercase tracking-wide">
                    {service.desc}
                  </p>
                  <div className="w-16 h-0.5 bg-[#D04713]"></div>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default TeamsCard;
