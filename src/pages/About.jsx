import React from 'react'
import Layout from '../components/Layout'
import Counter from '../components/about/Counter'
import TabInfo from '../components/about/TabInfo'
import ServiceCards from '../components/about/ServiceCards'
import TeamsCard from '../components/about/TeamsCard'

const About = () => {
  return (
    <Layout>
      <section className='py-20'>
        <div className='container mx-auto px-4 relative'>
          <div className='absolute bottom-0 right-0'>
            <img src="assets/about/banner.webp" alt="about hero" />
          </div>
          <div className='flex flex-col'>
            <div className='flex items-center justify-around z-2 mb-10'>
              <div className='w-fill md:w-[23%]'>
                <div className='w-15 h-0.5 bg-[#D04713] mb-3'></div>
                <p className='text-[#B9B8B9]'><span className='font-semibold'>ARINDE</span> has worked on projects nationwide and worldwide, designs that make magic happen, without the wand. focuses more on structural design.</p>
              </div>
              <div className='z-2'>
                <h2 className='text-[230px] uppercase text-[#B8B9B8] leading-none font-semibold tracking-[-6px]'>ABOUT</h2>
              </div>
            </div>
            <div className='flex z-2'>
              <div>
                <h2 className='text-[230px] uppercase text-[#B8B9B8] leading-none font-semibold tracking-[-6px]'>ARINDE</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 bg-[#0F100E]'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col gap-y-6'>
            <h2 className="text-[#B8B9B8] text-[90px] font-bold leading-tight mb-6 tracking-tight">
              Where Creativity And Luxury Meets Functionality
            </h2>
            <div className='w-full h-full mb-10'>
              <img src="assets/about/about.webp" alt="about" />
            </div>
            <div className='flex flex-wrap justify-between'>
              <div className='w-full md:w-[49%]'>
                <Counter />
              </div>
              <div className='w-full md:w-[49%]'>
                <TabInfo />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <h2 className="text-[#B8B9B8] text-[60px] font-bold w-[65%] leading-tight mb-6 tracking-tight">
            Services
          </h2>
          <ServiceCards />
        </div>
      </section>

      <section className='py-20 bg-[#0F100E]'>
        <div className='container mx-auto px-4'>
          <p className='text-[#D04713] text-center mb-2'>MEMBERS</p>
          <h2 className="text-[#B8B9B8] text-center text-[60px] font-bold leading-tight mb-6 tracking-tight">Our Team</h2>
          <TeamsCard />
        </div>
      </section>
    </Layout>
  )
}

export default About
