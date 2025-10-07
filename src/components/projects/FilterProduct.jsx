import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AllProjects from "./AllProjects";
import ArchitectureProjects from "./ArchitectureProjects";
import InteriorProjects from "./InteriorProjects";
import LandscapeProjects from "./LandscapeProjects";
import RemodelingProjects from "./RemodelingProjects";

const categories = [
  "all",
  "architecture",
  "interior",
  "landscape",
  "remodeling",
];

const FilterProduct = () => {
  const [filter, setFilter] = useState("all");

  const handleFilterClick = (category) => {
    setFilter(category);
  };

  const renderProjects = () => {
    switch (filter) {
      case "all":
        return <AllProjects />;
      case "architecture":
        return <ArchitectureProjects />;
      case "interior":
        return <InteriorProjects />;
      case "landscape":
        return <LandscapeProjects />;
      case "remodeling":
        return <RemodelingProjects />;
      default:
        return <AllProjects />;
    }
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <div className="bg-[#131412] py-10">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* <h2 className="text-3xl font-bold text-white mb-4">Our Projects</h2>
            <p className="text-[#B8B9B8] text-lg">
              Explore our diverse portfolio of architectural and design projects
            </p> */}
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                variants={buttonVariants}
                onClick={() => handleFilterClick(category)}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.1 },
                }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 capitalize ${
                  filter === category
                    ? "bg-[#D04713] text-white shadow-lg"
                    : "bg-white/10 text-[#B8B9B8] hover:bg-white/20 hover:text-white"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {renderProjects()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FilterProduct;
