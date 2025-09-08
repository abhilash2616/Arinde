import React, { useState } from "react";

const TabInfo = () => {
    const [activeTab, setActiveTab] = useState("who");

    const tabContent = {
        who: `ARINDE has worked on projects nationwide and worldwide, designs that make 
          magic happen, without the wand. We focuses more on structural design, whereas 
          interior, architecture design is the practice of creating interior atmosphere. 
          This involves carefully designing lines, colors, plants, lighting, building 
          materials, space.`,
        mission: `Our mission is to deliver high-quality, innovative, and sustainable 
              solutions to our clients. We aim to exceed expectations and create 
              designs that stand the test of time.`,
        vision: `Our vision is to be recognized as a leader in the architecture and 
             design industry, known for creativity, excellence, and client 
             satisfaction worldwide.`
    };

    return (
        <div className="text-[#B8B9B8]">
            <div className="max-w-4xl mx-auto">

                {/* Tabs */}
                <div className="flex w-[50%]">
                    <button
                        className={`pb-2 px-4 text-[18px] hover:cursor-pointer ${activeTab === "who"
                                ? "text-[#D04713] border-b-1 border-[#D04713]"
                                : "text-[#B8B9B8] border-b-1 border-[#B8B9B8]"
                            }`}
                        onClick={() => setActiveTab("who")}
                    >
                        Who We Are
                    </button>
                    <button
                        className={`pb-2 px-6 text-[18px] hover:cursor-pointer ${activeTab === "mission"
                                ? "text-[#D04713] border-b-1 border-[#D04713]"
                                : "text-[#B8B9B8] border-b-1 border-[#B8B9B8]"
                            }`}
                        onClick={() => setActiveTab("mission")}
                    >
                        Mission
                    </button>
                    <button
                        className={`pb-2 px-6 text-[18px] hover:cursor-pointer ${activeTab === "vision"
                                ? "text-[#D04713] border-b-1 border-[#D04713]"
                                : "text-[#B8B9B8] border-b-1 border-[#B8B9B8]"
                            }`}
                        onClick={() => setActiveTab("vision")}
                    >
                        Vision
                    </button>
                </div>

                {/* Content */}
                <div className="mt-6 text-gray-300 w-[90%] leading-relaxed">
                    {tabContent[activeTab]}
                </div>

                {/* Button */}
                <div className="mt-6">
                    <button className="bg-[#D04713] hover:bg-orange-700 hover:cursor-pointer text-white px-6 py-4">
                        Contact Us
                    </button>
                </div>

            </div>
        </div>
    );
};

export default TabInfo;
