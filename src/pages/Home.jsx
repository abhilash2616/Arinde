import React from 'react';
import Layout from '../components/Layout';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <Layout>

      <div className='relative h-[765px] w-full'>
        <Splide
          options={{
            type: 'loop',
            autoplay: true,
            interval: 4000,
            arrows: true,
            pagination: false,
          }}>
          <SplideSlide>
            <div className="relative w-full h-[765px]">
              <img src="assets/background/slider-1.webp" alt="home" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/0 flex flex-col justify-center px-16 gap-0">
                <div className='flex flex-col justify-center w-full'>
                  <p className='relative text-white text-normal text-lg md:text-xl mb-6 pl-20 before:content-[""] before:absolute before:left-0 before:top-[50%] before:w-[75px] before:h-[2px] before:bg-[#d04713]'>
                    Modern Interior Design
                  </p>
                  <h2 className="text-white text-4xl md:text-[80px] text-left font-semibold mb-2 leading-none">
                    Architecture And Interior<br /> Design From Arinde
                  </h2>
                </div>
                <div className='w-full flex justify-end'>
                  <Link to="/project">
                    <img src="assets/background/slider-1-sm.webp" alt="logo" className="w-auto h-auto shadow-lg rounded-md" />
                  </Link>
                </div>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="relative w-full h-[765px]">
              <img src="assets/background/slider-2.webp" alt="home" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/0 flex flex-col justify-center px-16 gap-0">
                <div className='flex flex-col justify-center w-full'>
                  <p className='relative text-white text-normal text-lg md:text-xl mb-6 pl-20 before:content-[""] before:absolute before:left-0 before:top-[50%] before:w-[75px] before:h-[2px] before:bg-[#d04713]'>
                    Modern Interior Design
                  </p>
                  <h2 className="text-white text-4xl md:text-[80px] text-left font-semibold mb-2 leading-none">
                    Interior And Architecture<br /> Design From Arinde
                  </h2>
                </div>
                <div className='w-full flex justify-end'>
                  <Link to="/project">
                    <img src="assets/background/slider-2-sm.webp" alt="logo" className="w-auto h-auto shadow-lg rounded-md" />
                  </Link>
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </Layout>
  );
};

export default Home;
