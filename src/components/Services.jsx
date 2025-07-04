import React from 'react';
import finance from '../assets/images/finance.png';
import tech from '../assets/images/tech.png';

export default function Services() {
  return (
    <section className='bg-gray-50 p-10 '>
      <div className='flex flex-col *:text-lg space-y-4 '>
        <h1 className='font-semibold text-gray-500'>Our Services</h1>
        <div>
          <h1 className='text-4xl font-semibold max-w-xl'>
            Comprehensive Web Design and Development Services{' '}
          </h1>
        </div>
      </div>
     
      {/* Finance */}
      <div className='flex flex-col *:text-lg space-y-4  pt-12'>
        <h1 className='font-semibold text-gray-500'>Bull-Hans</h1>
        <div>
          <h1 className='text-4xl font-semibold max-w-xl'>
            Financial Advisory Services
          </h1>
        </div>
      </div>
      <div className='md:space-x-16 space-x-6 flex flex-col-reverse md:flex-row pt-12 '>
        <div className='flex flex-col space-y-10 p-16 border-gray-200 border-l-2 '>
          <div className='*:text-lg *:max-w-md '>
            {/* Bullet square */}
            <div className='flex space-x-10 items-center'>
              <div className='bg-gray-950 p-2 w-8 rounded-md flex items-center justify-center -ml-20 '>
                <h1 className='text-gray-50 text-xs font-bold '>1</h1>
              </div>
              <h1 className='text-gray-950 font-semibold'>
                Transaction Advisory & Due Diligence
              </h1>
            </div>
            <p className='text-gray-400'>
              Guiding clients through complex financial transactions Conducting
              thorough investigations, research, and document assessments to
              evaluate transaction risks
            </p>
          </div>
          {/* second */}
          <div className='*:text-lg *:max-w-md'>
            {/* Bullet square */}
            <div className='flex space-x-10 items-center'>
              <div className='bg-gray-950 p-2 w-8 rounded-md flex items-center justify-center -ml-20 '>
                <h1 className='text-gray-50 text-xs font-bold '>2</h1>
              </div>
              <h1 className='text-gray-950 font-semibold'>
                Pitch Books & Business Planning
              </h1>
            </div>
            <p className='text-gray-400 '>
              Creating compelling, professional presentations to attract
              investors or partners Crafting comprehensive business plans to
              guide strategy and secure funding
            </p>
          </div>
          {/* Third  */}
          <div className='*:text-lg *:max-w-md'>
            {/* Bullet square */}
            <div className='flex space-x-10 items-center'>
              <div className='bg-gray-950 p-2 w-8 rounded-md flex items-center justify-center -ml-20 '>
                <h1 className='text-gray-50 text-xs font-bold '>3</h1>
              </div>
              <h1 className='text-gray-950 font-semibold'>
                Business Registration & E-Legal Assessment
              </h1>
            </div>
            <p className='text-gray-400 '>
              Assisting with the legal and administrative processes of
              establishing new businesses Reviewing and defining legal clauses
              of Articles of Association and shareholders' agreements in
              collaboration with legal advisors
            </p>
          </div>
          {/* Fourth */}
          <div className='*:text-lg *:max-w-md'>
            {/* Bullet square */}
            <div className='flex space-x-12 items-center'>
              <div className='bg-gray-950 p-2 w-8 flex rounded-md items-center justify-center -ml-20 '>
                <h1 className='text-gray-50 text-xs font-bold '>4</h1>
              </div>
              <h1 className='text-gray-950 font-semibold'>
                Financial Modelling & Valuation
              </h1>
            </div>
            <p className='text-gray-400'>
              Developing sophisticated financial models to forecast performance
              and aid decision-making Determining the fair value of investments,
              businesses, and assets
            </p>
          </div>
          {/* Ffith */}
          <div className='*:text-lg *:max-w-md'>
            {/* Bullet square */}
            <div className='flex space-x-12 items-center'>
              <div className='bg-gray-950 p-2 w-8 flex rounded-md items-center justify-center -ml-20 '>
                <h1 className='text-gray-50 text-xs font-bold '>5</h1>
              </div>
              <h1 className='text-gray-950 font-semibold'>
                Sector Analysis & Scouting
              </h1>
            </div>
            <p className='text-gray-400'>
              Identifying innovative trends to reshape the competitive landscape
              in your industry Setting goals and identifying startups and
              investors through thorough analysis
            </p>
          </div>
          {/* Ffith */}
          <div className='*:text-lg *:max-w-md'>
            {/* Bullet square */}
            <div className='flex space-x-12 items-center'>
              <div className='bg-gray-950 p-2 w-8 flex rounded-md items-center justify-center -ml-20 '>
                <h1 className='text-gray-50 text-xs font-bold '>6</h1>
              </div>
              <h1 className='text-gray-950 font-semibold'>Target Engagement</h1>
            </div>
            <p className='text-gray-400'>
              Researching potential contacts in startups and scale-ups Arranging
              meetings and facilitating interactions between clients and targets
            </p>
          </div>
        </div>
        <div className='w-1/2'>
          <img src={finance} alt='tech' />
        </div>
      </div>
    </section>
  );
}
