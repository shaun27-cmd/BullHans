import devjob from '../assets/images/devjobs.svg';
import meet from '../assets/images/meet.svg';
import Bull from '../assets/images/Bull.svg';
import Aifa from '../assets/images/aifa.svg';
import Workit from '../assets/images/workit.svg';
import huddle from '../assets/images/huddle.svg';
import Kel from '../assets/images/kel.svg';

import official from '../assets/images/official.svg';
export default function Customers() {
  const imagez = [devjob, meet, Bull, official, Workit, huddle, Aifa, Kel];
  console.log(imagez);
  return (
    <div className='bg-gray-950 p-12 space-y-3'>
      <div className='flex flex-col md:flex-row  border-gray-500'>
        <h1 className='font-semibold text-lg text-gray-50'>
          We’ve worked with these amazing people{' '}
        </h1>
      </div>
      <div className='grid grid-cols-2 gap-10 md:grid-cols-3 items-center lg:grid-cols-4'>
        {imagez.map((image, index) => (
          <div key={index}>
            <img src={image} alt="company's logo" />
          </div>
        ))}
      </div>
    </div>
  );
}
