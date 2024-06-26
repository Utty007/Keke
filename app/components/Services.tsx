import React from 'react'
import one from '@/app/Assets/serviceNum.svg'
import Two from '@/app/Assets/Two.svg'
import Three from '@/app/Assets/Three.svg'
import Image from 'next/image'

function Services() {
  return (
    <div className='p-8'>
        <h2 className='text-center text-5xl text-black font-bold'>Our Services</h2>
        <p className='text-center text-white text-lg'>We envision a campus where bicycles are the preferred mode of transportation, contributing to a cleaner environment and a vibrant, active student body. Through Innovation, Dedication and Community partnership, Keke strives to set the standard for sustainable transportation within education institutions natiionwide</p> 
        <div className='flex flex-col md:flex-row gap-8 items-center justify-center mt-8'>
            <div className='flex flex-col items-center max-w-[350px] text-center'>
                <Image src={one} alt='Number One' />
                <h2 className='text-2xl font-medium'>Bicycle Rentals</h2>
                <p className='text-white text-lg'>Easy and affordable rentals with various plans to suit your needs.</p>
            </div>
            <div className='flex flex-col items-center max-w-[350px] text-center'>
                <Image src={Two} alt='Number Two' />
                <h2 className='text-2xl font-medium'>Repair Services</h2>
                <p className='text-white text-lg'>On-site maintenance and repair to keep your ride in top condition.</p>
            </div>
            <div className='flex flex-col items-center max-w-[350px] text-center'>
                <Image src={Three} alt='Number Three' />
                <h2 className='text-2xl font-medium'>Safety Gears</h2>
                <p className='text-white text-lg'>Helmets and other safety equipment available for all users.</p>
            </div>
        </div>
    </div>
  )
}

export default Services;