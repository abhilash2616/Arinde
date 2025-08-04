import React from "react";
import Layout from "../components/Layout";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Home = () => {
  const slides = [
    {
      image: "assets/background/slider-1.webp",
      text: "Architecture And Interior Design From Arinde",
      subText: "Modern Interior Design",
      smallImage: "assets/background/slider-1-sm.webp",
    },
    {
      image: "assets/background/slider-2.webp",
      text: "Interior And Architecture Design From Arinde",
      subText: "Modern Interior Design",
      smallImage: "assets/background/slider-2-sm.webp",
    },
  ];
  return (
    <Layout>
      <div className="relative h-[765px] w-full">
        <Splide
          options={{
            type: "loop",
            autoplay: true,
            interval: 4000,
            arrows: true,
            pagination: false,
          }}
        >
          {slides.map((slide, index) => (
            <SplideSlide key={index}>
              <div className="relative w-full h-[765px]">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6 md:px-16 gap-4">
                  <motion.div
                    className="flex flex-col justify-center w-full"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <p className="relative text-white text-lg md:text-xl mb-6 pl-20 before:content-[''] before:absolute before:left-0 before:top-[50%] before:w-[75px] before:h-[2px] before:bg-[#d04713]">
                      {slide.subText}
                    </p>

                    <h2 className="text-white text-4xl md:text-[80px] text-left font-semibold mb-2 leading-tight">
                      {slide.text.split("<br />").map((line, i) => (
                        <span key={i} className="block">
                          {line}
                        </span>
                      ))}
                    </h2>
                  </motion.div>

                  <motion.div
                    className="w-full flex justify-end"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <Link to="/project">
                      <img
                        src={slide.smallImage}
                        alt="slide logo"
                        className="w-auto h-auto shadow-lg rounded-md"
                      />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </Layout>
  );
};

export default Home;