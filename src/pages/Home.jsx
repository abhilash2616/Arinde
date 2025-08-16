import React from "react";
import Layout from "../components/Layout";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ServiceCards from "../components/home/ServiceCards";
import ProjectLayout from "../components/home/ProjectLayout";

const Home = () => {
  const slides = [
    {
      image: "assets/background/slider-1.webp",
      text: ["Architecture And Interior", "Design From Arinde"],
      subText: "Modern Interior Design",
      smallImage: "assets/background/slider-1-sm.webp",
    },
    {
      image: "assets/background/slider-2.webp",
      text: ["Interior And Architecture", "Design From Arinde"],
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
                      {slide.text.map((line, i) => (
                        <span key={i} className="block">{line}</span>
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

      <section className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col md:flex-row items-center">
          <motion.div
            className="relative z-20 w-full text-white md:pr-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              <div className="w-[200px] h-[2px] bg-[#D04713]"></div>
              <h2 className="uppercase text-[60px] md:text-[120px] font-bold text-transparent stroke-text">
                About Us
              </h2>
            </div>

            <p className="mt-4 text-[50px] font-semibold text-[#B8B9B8] w-[50%] leading-none tracking-tight">
              We are a passionate team aim to creating best living spaces
            </p>

            <div className="flex w-[70%] gap-x-6 py-20 items-center">
              <p className="max-w-[90%]">
                ARINDE has worked on projects nationwide and worldwide, designs that make magic happen, without the wand. focuses more on structural design, whereas interior design is the practice of creating interior atmosphere. This involves carefully designing lines, colors, plants, lighting, building materials, and space to create an area that feels nurturing to the human body.
              </p>
              <motion.img
                src="assets/about/image-2.webp"
                alt="about sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
          <motion.div
            className="absolute right-0 top-0 w-full md:w-1/2 h-[800px] z-10"
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="assets/about/image-1.webp"
              alt="about"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-[#0F100E]">
      <div className="container mx-auto px-4">
          <h2 className="text-[#B8B9B8] text-[60px] font-bold w-[65%] leading-tight mb-6 tracking-tight">Services Provided In Interior And Architecture Design</h2>
          <ServiceCards />
      </div> 
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <p className="text-center uppercase text-[#D04713] text-[20px]">PROJECTS</p>
        <h2 className="text-center text-[#B8B9B8] text-[60px] font-bold mb-6 tracking-tight">Latest Works</h2>

        <ProjectLayout />
      </div>
    </section>



    </Layout>
  );
};

export default Home;