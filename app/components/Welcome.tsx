import React from 'react';
import Image from 'next/image';
import CyclistImg from '@/app/Assets/cyclist.svg'

function Welcome() {
  return (
    <div className="lg:h-[600px] flex flex-col-reverse md:flex-row gap-8 justify-between items-center p-6 md:p-16">
        <div className='my-5 md:my-0'>
          <h1 className="text-4xl md:text-5xl font-bold text-black uppercase">Welcome to Keke<span className="text-white">.com</span></h1>
          <p className="py-2">Your Eco-Friendly Camp Travel Solution.</p>
          <a href="#about"className="bg-black block text-white px-4 inline-block py-2 rounded-full">Learn More</a>
        </div>
        <div>
          <Image src={CyclistImg} alt="Cyclist Illustration" />
        </div>
      </div>
  )
}

export default Welcome;

<form>

</form>