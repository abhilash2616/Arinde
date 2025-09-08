import React from "react";
import CountUp from "react-countup";

const Counter = () => {
    return (
        <div className="text-[#B8B9B8]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                <div className="flex flex-col items-start gap-y-4">
                    <h2 className="text-5xl font-bold">
                        <CountUp end={1600} suffix="K" duration={3} />
                    </h2>
                    <p className="mt-2 text-lg">Projects Done</p>
                </div>
                <div className="flex flex-col items-start gap-y-4">
                    <h2 className="text-5xl font-bold">
                        <CountUp end={15} suffix="+" duration={3} />
                    </h2>
                    <p className="mt-2 text-lg">Years Experience</p>
                </div>
                <div className="flex flex-col items-start gap-y-4">
                    <h2 className="text-5xl font-bold">
                        <CountUp end={1200} suffix="K" duration={3} />
                    </h2>
                    <p className="mt-2 text-lg">Happy Clients</p>
                </div>
            </div>
        </div>
    );
};

export default Counter;
