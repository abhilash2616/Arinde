import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import "@splidejs/react-splide/css";
import LaunchIcon from '@mui/icons-material/Launch';
import { Link } from 'react-router-dom';

const services = [
  {
    id: "01",
    img: "/assets/services/sv-img-1.webp",
    title: "PROJECT INCEPTION",
    desc: "We have several strategic teaming arrangements with experienced to complete full design services.",
  },
  {
    id: "02",
    img: "/assets/services/sv-img-2.webp",
    title: "INTERIOR DESIGN",
    desc: "We have several strategic teaming arrangements with experienced to complete full design services.",
  },
  {
    id: "03",
    img: "/assets/services/sv-img-3.webp",
    title: "LANDSCAPE DESIGN",
    desc: "We have several strategic teaming arrangements with experienced to complete full design services.",
  },
  {
    id: "04",
    img: "/assets/services/sv-img-4.webp",
    title: "HOME RENOVATION",
    desc: "We have several strategic teaming arrangements with experienced to complete full design services.",
  },
];

const ServiceCards = () => {
  return (
    <div>
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          interval: 4000,
          arrows: true,
          pagination: false,
          perPage: 4,
          breakpoints: {
            1024: { perPage: 3 },
            768: { perPage: 1 },
          },
        }}
      >
        {services.map((service, index) => (
          <SplideSlide key={service.id}>
            <div className={`p-2 ${index % 2 !== 0 ? "mt-[100px]" : ""}`}>
              <p className="text-[#d04713] font-normal text-[25px] pl-6">{service.id}</p>
              <div className="flex flex-col gap-4 justify-start items-center">
                <img src={service.img} alt={service.title} />
                <div className="bg-[#FFF] p-6 w-[82%] mt-[-40px]">
                  <h3 className="uppercase text-[#2B2C2A] text-[20px] mb-3">{service.title}</h3>
                  <p className="mb-6 leading-relaxed">{service.desc}</p>
                  <Link to="/project">
                    <LaunchIcon
                      sx={{
                        color: "#57564F",
                        fontSize: 30,
                        transition: "color 0.3s ease",
                        "&:hover": {
                          color: "#d04713",
                          cursor: "pointer",
                        },
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}

export default ServiceCards
