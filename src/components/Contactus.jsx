import React from 'react'

export default function Contactus() {
  return (
    <section className='bg-gray-50 p-10 '>
        <div className='flex flex-col *:text-lg space-y-4  pt-12'>
        <h1 className='font-semibold  text-gray-500'>Contact us</h1>
        </div>
        <div className="mt-10 bg-gray-950 p-10 flex-col mx-auto items-center justify-center space-y-6 rounded-2xl max-w-6xl">
            <h1 className='text-4xl text-gray-50 font-semibold'>Tell us about your project !</h1>
            <button className='rounded-full font-semibold text-gray-950 bg-gray-50 px-8 py-4 shadow-sm ring-1 ring-gray-100 hover:bg-gray-950 hover:text-gray-50 hover:transition hover:duration-700'>Say Hi</button>
            <div className='ring-1 ring-gray-900'>
            </div>
            <div className="flex items-baseline md:justify-between space-y-3 md:space-y-0 flex-col md:flex-row">
            <div className="flex-flex-col max-w-md">
                <h1 className='text-gray-200 font-semibold'>Our office</h1>
                <h1 className='text-gray-500'>We do not have a physical office, we meet with our customers in person at professional venues such as restaurants and business centres to discuss and finalise deals</h1>
            </div>
            {/* Email section */}
            <div className="flex flex-col max-w-md space-y-5 md:space-y-10 md:px-3">
                <a href="mailto:info@6lacktech.com" target='_blank'><h1 className='text-gray-400'>Email us: <span className='font-semibold'>info@6lacktech.com</span></h1></a>
                <a href="http://"><h1 className='text-gray-400'>Call us :  <span className='font-semibold'>+233544294220</span> </h1></a>
            </div>
            </div>
        </div>
    </section>
  )
}
