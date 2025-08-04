import React from "react";
import { Link } from "react-router-dom";
import LetterBanner from "./LetterBanner";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Footer = () => {
  const contactInfo = [
    {
      title: "Address",
      value: "122204 Street, Atlanta 21203, United States of America",
    },
    { title: "Call us now", value: "0912355679" },
    { title: "Email", value: "yourmail@gmail.com" },
    { title: "Follow us", value: "Youtube Instagram" },
  ];

  const footerData = {
    Links: [
      { label: "Home", path: "/" },
      { label: "About Us", path: "/about" },
      { label: "Our Projects", path: "/project" },
      { label: "Latest News", path: "/news" },
      { label: "Contact Us", path: "/contact" },
    ],
    Styles: [
      "Industrial Design And Examples",
      "Modern Architecture & Interior",
      "What Is Transitional Style?",
      "Coastal Interior Design Ideas",
      "Best Minimalism Design Ideas",
    ],
    "Recent Projects": [
      "Spring Home Interior Design In NY",
      "Open Living-Dining Room Best Ideas",
      "Small Living Room Design Trending",
      "Beautiful Bohemian Living Room Ideas",
      "Minimalist Decorating Style",
    ],
    "Recent News": [
      "24 Farmhouse Style Decor Ideas For You",
      "12 Steps To Decorate Your Living Room",
      "Best Mid Century Modern Furniture Ideas",
      "26 best color combinations for design",
      "How to Combine Colors and Textures",
    ],
  };

  return (
    <footer className="bg-[#0F100E] pt-20 py-10">
      <div className="container mx-auto px-4">
        {/* Top section: About & Contact Heading */}
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-[25%]">
            <div className="w-16 h-[1px] bg-[#d04713] mb-3"></div>
            <p className="text-left text-sm text-[#B8B9B8] max-w-[330px] leading-relaxed">
              ARINDE is an architecture and interior design company celebrated
              by top publications as one of the most in the industry. At ARINDE,
              we will help you create a spectacular home.
            </p>
          </div>
          <div className="w-full md:w-[75%]">
            <p className="text-[230px] uppercase text-[#B8B9B8] leading-none font-semibold tracking-[-6px]">
              contact
            </p>
          </div>
        </div>

        {/* Middle section: Newsletter and Contact Info */}
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-[75%]">
            <LetterBanner />
          </div>
          <div className="w-full md:w-[25%]">
            <div className="flex flex-col gap-2">
              {contactInfo.map((item, index) => {
                const isEmail = item.title.toLowerCase().includes("email");
                const isPhone = item.title.toLowerCase().includes("call");

                const href = isEmail
                  ? `mailto:${item.value}`
                  : isPhone
                  ? `tel:${item.value}`
                  : null;

                return (
                  <div key={index}>
                    <span className="font-semibold text-[#B8B9B8]">
                      {item.title}:
                    </span>{" "}
                    {href ? (
                      <a
                        href={href}
                        className="text-[#B8B9B8] font-normal hover:text-[#D04713] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-[#B8B9B8] font-normal">
                        {item.value}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Grid Links Section */}
        <div className="bg-[#131412] p-6 rounded-lg mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {Object.entries(footerData).map(([sectionTitle, items], i) => (
              <motion.div
                key={sectionTitle}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-[25px] text-[#B8B9B8] mb-6 tracking-wide capitalize">
                  {sectionTitle}
                </h3>
                <ul className="space-y-3">
                  {items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-[#B8B9B8] hover:text-[#D04713] cursor-pointer transition-colors duration-200 text-sm tracking-wide group w-fit"
                    >
                      <KeyboardDoubleArrowRightIcon
                        fontSize="small"
                        className="text-[#D04713] group-hover:text-[#D04713] transition-colors duration-200"
                      />
                      {sectionTitle === "Links" ? (
                        <Link to={item.path} className="inline-block relative">
                          <span>{item.label}</span>
                          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#D04713] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                      ) : (
                        <Link to="/project" className="inline-block relative">
                          <span>{item}</span>
                          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#D04713] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 pb-4 text-center">
          <p className="text-sm text-[#B8B9B8]">
            © Copyright ARINDE {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
