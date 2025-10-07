"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, PlayIcon } from "lucide-react";

const InteriorProjects = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h3 className="text-[30px] font-medium text-[#B8B9B8] mb-4">
            Mountain House Architecture Design
          </h3>

          <div className="flex justify-center items-center gap-x-8">
            <div className="w-20 h-0.5 bg-[#D04713]"></div>
            <p className="text-[#B8B9B8] text-lg uppercase">INTERIOR</p>
            <div className="w-20 h-0.5 bg-[#D04713]"></div>
          </div>
        </div>

        {/* Image with Play Button */}
        <div className="relative group">
          <img
            src="/assets/project/img-5.png"
            alt="Mountain House"
            width={1400}
            height={900}
            className="w-full h-full object-cover"
          />

          {/* YouTube Play Icon */}
          <button
            onClick={() => setIsOpen(true)}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-[#D04713]/90 rounded-full p-2 sm:p-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_#D04713]">
                <PlayIcon
                color="white"
                width="30"
                height="30"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Popup Video Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-white hover:text-[#D04713] transition"
            >
              <X size={32} />
            </button>

            {/* Video Container */}
            <motion.div
              className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <iframe
                src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteriorProjects;
