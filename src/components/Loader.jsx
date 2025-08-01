import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
            <ThreeCircles
                visible={true}
                height="100"
                width="100"
                color="#fff"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default Loader;