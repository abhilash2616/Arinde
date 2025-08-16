import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const categories = ["all", "architecture", "interior", "landscape", "remodeling"];

const ProjectLayout = () => {
    const [filter, setFilter] = useState("all");

    return (
        <div className="text-white px-6 py-12">
            {/* Categories */}
            <div className="flex justify-center gap-8 mb-10 uppercase text-sm tracking-wider">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`pb-1 uppercase cursor-pointer border-b-1 transition ${filter === cat
                            ? "border-orange-500 text-orange-500"
                            : "border-transparent"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Cards manually */}
            <motion.div layout className="flex flex-wrap gap-8">
                <AnimatePresence>
                    <motion.div
                        layout
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.4 }}
                        whileHover={{ scale: 1.03 }}
                        className="shadow-lg flex flex-col w-full sm:w-[48%] lg:w-[48%] "
                    >
                        <Link to="/">
                            <div className="relative">
                                <img
                                    src="/assets/architexture-projects/pr-1.webp"
                                    alt="Modern House"
                                    className="w-full h-full object-cover"
                                />
                                <div
                                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 
                       bg-white text-black px-6 py-4 shadow-md w-[70%]"
                                >
                                    <h3 className="text-xl font-semibold">Modern House</h3>
                                    <p className="uppercase text-sm text-orange-600">Interior</p>
                                </div>
                            </div>
                        </Link>
                    </motion.div>


                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default ProjectLayout;
