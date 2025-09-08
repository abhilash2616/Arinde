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
            <div className="relative group overflow-hidden">
              
                <img
                  src={service.img}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

              {/* Overlay */}
              <div className="absolute w-[80%] bottom-0 left-0 right-0 bg-black/70 px-6 py-4">
                <h3 className="text-xl font-semibold text-white">
                  {service.name}
                </h3>
                <p className="text-sm text-orange-500 uppercase tracking-wide">
                  {service.desc}
                </p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default TeamsCard;
