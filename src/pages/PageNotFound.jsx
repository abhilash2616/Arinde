import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const numberVariants = {
  hover: {
    y: -10,
    scale: 1.1,
    transition: { type: "spring", stiffness: 300 },
  },
};

const PageNotFound = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 h-screen">
        <motion.div
          className="flex flex-wrap text-white justify-between items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="w-full md:w-[49%] flex flex-col justify-center px-8 sm:px-12 lg:px-20 space-y-6">
            <motion.div variants={itemVariants}>
              <motion.h2
                className="text-[#ED7A1C] text-sm font-semibold mb-2 tracking-widest"
                whileHover={{ scale: 1.05 }}
              >
                ERROR 404
              </motion.h2>
              <motion.h1
                className="text-[70px] sm:text-[90px] md:text-[100px] font-bold text-gray-300 leading-none mb-4"
                initial={{ x: -50 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                Lost in Space
              </motion.h1>
              <motion.p
                className="text-gray-400 text-md max-w-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                You have reached the edge of the universe. The page you are
                looking for doesn't exist or has been moved.
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/"
                className="inline-block w-fit bg-[#d04713] text-white px-8 py-4 font-medium shadow-lg"
              >
                ← Return to Home
              </Link>
            </motion.div>
          </div>

          <div className="w-full md:w-[49%] relative items-center justify-center overflow-hidden">
            <motion.div
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {["4", "0", "4"].map((num, index) => (
                <motion.span
                  key={index}
                  className="vertical-masked-404 text-[160px] lg:text-[240px] xl:text-[300px] font-extrabold leading-none bg-black"
                  variants={numberVariants}
                  whileHover="hover"
                  custom={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.7 + index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  {num}
                </motion.span>
              ))}
            </motion.div>

            <motion.img
              src="/assets/404/404.png"
              alt="404 background"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
