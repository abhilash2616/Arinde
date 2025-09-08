import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import "@splidejs/react-splide/css";
import { Link } from 'react-router-dom';

const services = [
    {
        id: "01",
        img: "/assets/about/sv2-1.webp",
        title: "PROJECT INCEPTION",
        desc: "Creating spaces that are art and science mixed in perfect harmony",
    },
    {
        id: "02",
        img: "/assets/about/sv2-2.webp",
        title: "INTERIOR DESIGN",
        desc: "Creating spaces that are art and science mixed in perfect harmony",
    },
    {
        id: "03",
        img: "/assets/about/sv2-3.webp",
        title: "LANDSCAPE DESIGN",
        desc: "Creating spaces that are art and science mixed in perfect harmony",
    },
];

const ServiceCards = () => {
    return (
        <div className="w-full">
            <Splide
                options={{
                    type: "loop",
                    autoplay: true,
                    interval: 4000,
                    gap: "2rem",
                    arrows: false,
                    pagination: false,
                    perPage: 3,
                    breakpoints: {
                        1024: { perPage: 2 },
                        768: { perPage: 1 },
                    },
                }}
            >
                {services.map((service) => (
                    <SplideSlide key={service.id}>
                        <div className="p-4 flex flex-col gap-y-6 text-[#B8B9B8] group">
                            <div className="relative flex items-center justify-end">
                                <span className="text-[220px] font-medium text-[#5b1f0c] group-hover:text-[#D04713] opacity-70 leading-none">
                                    {service.id}
                                </span>
                                <div className="absolute text-left z-10">
                                    <h3 className="uppercase text-2xl font-semibold mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="mt-2 text-gray-300">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="overflow-hidden">
                                <Link to="/project">
                                    <img
                                        src={service.img}
                                        alt={service.title}
                                        className="w-full h-auto hover:scale-105 transition-transform duration-300"
                                    />
                                </Link>
                            </div>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default ServiceCards;
