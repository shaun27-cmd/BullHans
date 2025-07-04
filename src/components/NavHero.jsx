import Logo from '../assets/images/Logo.svg';
import bgee from '../assets/images/six.svg';
import bull from '../assets/images/Bull.png';
import bullhead from '../assets/images/BullHeader.png'
export default function NavHero() {
  return (
    <nav className='@container bg-gray-50 m-3 rounded-t-4xl overflow-auto p-12 '>
      <div className='flex justify-between items-center relative'>
        <img src={bullhead} alt='6lacktech logo' className='size-auto' />
          {/* Navigation */}
        <ul className=' space-x-8 font-medium *:px-10 *:py-2 *:bg-gray-950 *:text-white *:rounded-full *:text-sm *:hover:bg-gray-800 *:hover:transition *:hover:duration-500 *:border-2 *:border-slate-700 hidden md:flex'>
          <li>Home </li>
          <li>About</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className='flex flex-col mx-auto md:flex-row  '>
        <div className='md:w-1/2 pt-20 md:pt-56 space-y-3 relative'>
          <h1 className='text-4xl md:text-7xl font-semibold '>
            It’s Time for a Switch-Up
          </h1>
          <p className='text-gray-400 text-lg md:text-2xl max-w-xs md:max-w-sm'>
            You can focus on running your business while we focus on growing it.
          </p>
        </div>
        <img src={bull} alt='six background' className='' />
      </div>
    </nav>
  );
}
