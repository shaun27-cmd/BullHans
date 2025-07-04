import React from 'react';
import union from '../assets/images/icons/Union.svg';
import heart from '../assets/images/icons/heart.svg';
import Sun from '../assets/images/icons/Sun.svg';

export default function About() {
  return (
    <section className='bg-gray-50 p-10'>
      <div className='flex flex-col *:text-lg space-y-4 '>
        <h1 className='font-semibold text-gray-500'>About Us</h1>
        <h1 className='font-semibold'>Company Overview</h1>
        <p className='text-gray-400 lg:pr-48 '>
          6lackTech (pronounced Blacktech) is a leading agency offering a unique
          combination of top-tier web design and development services alongside
          comprehensive financial advisory solutions. We are committed to
          delivering innovative, user-friendly, and aesthetically pleasing
          websites that cater to the diverse needs of businesses and
          individuals. Our team of skilled professionals is dedicated to
          achieving exceptional results tailored to our clients' unique
          requirements.
        </p>
      </div>
      <div className=' pt-20'>
        <h1 className='text-4xl font-semibold max-w-md'>
          Harnessing Technology for a brighter future
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 py-20 '>
          <div className='flex flex-col space-y-5 p-6 ring-1 max-w-md rounded-2xl ring-gray-200 shadow-sm'>
            <div>
              <img src={union} alt='icons' />
            </div>
            <h1 className='text-gray-600 font-medium'>
              2024 /{' '}
              <span className='text-gray-400 font-medium'>Case study</span>
            </h1>
            <h1 className='font-semibold text-xl'>Mouth watering websites</h1>
            <p className='text-gray-400 '>
              We pride ourselves on crafting stunning and highly functional
              websites that not only capture attention but also deliver
              exceptional user experiences. Our approach combines cutting-edge
              design, robust development practices, and strategic marketing to
              create websites that are as effective as they are beautiful.
            </p>
          </div>
          {/* Second card */}
          <div className='flex flex-col space-y-5 p-6 ring-1 max-w-md rounded-2xl  ring-gray-200 shadow-sm'>
            <div>
              <img src={Sun} alt='icons' />
            </div>
            <h1 className='text-gray-600 font-medium'>
              2024 /{' '}
              <span className='text-gray-400 font-medium'>Case study</span>
            </h1>
            <h1 className='font-semibold text-xl'>
              Aeasthetically pleasing designs for your business
            </h1>
            <p className='text-gray-400 '>
              At 6lackTech, we understand the importance of aesthetics in
              creating impactful web presences that resonate with users and
              reflect brand values.our approach is designing visually stunning
              websites that not only captivate visitors but also support
              business goals through functional and strategic design elements.
            </p>
          </div>
          {/* Third card */}
          <div className='flex flex-col space-y-5 p-6 ring-1 max-w-md rounded-2xl ring-gray-200 shadow-sm'>
            <div>
              <img src={heart} alt='icons' />
            </div>
            <h1 className='text-gray-600 font-medium'>
              2024 /{' '}
              <span className='text-gray-400 font-medium'>Case study</span>
            </h1>
            <h1 className='font-semibold text-xl'>Maintenance and Support</h1>
            <p className='text-gray-400 '>
              At 6lackTech, we recognize that the launch of a website is just
              the beginning. Continuous maintenance and support are crucial for
              ensuring that websites remain secure, up-to-date, and perform
              optimally.our comprehensive maintenance and support services,
              showcasing how we help our clients maintain seamless online
              operations and adapt to evolving needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
