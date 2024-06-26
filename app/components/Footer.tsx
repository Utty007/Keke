/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Logo from '@/app/Assets/Logo.svg'
import Image from 'next/image';
import { FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
        <div className='bg-black text-center p-8'>
          <h3 className='text-5xl font-bold text-[#f4c617] leading-normal'>Get Involved</h3>
          <p className='text-white'>Interested in joining the Keke community? Whether you're looking to volunteer, partner with us, or simply stay updated, we're excited to hear from you. Together, let's pedal towards a greener future!</p>
          <div className='mt-8 flex flex-col gap-5 justify-center items-center'>
            <div className='flex flex-col md:flex-row gap-8'>
              <input type="text" name="name" placeholder='Name' className='p-3 text-xl outline-[#f4c617] w-[300px]' />
              <input type="email" name="email" placeholder='Email' className='p-3 text-xl outline-[#f4c617] w-[300px]' />
            </div>
            <button className='px-5 py-2 bg-[#f4c617] text-black rounded-full'>Subscribe</button>
          </div>
        </div>
        <div className='bg-white px-10 py-16 flex flex-col md:flex-row gap-8 justify-between'>
          <Image src={Logo} alt='Keke Company Logo' />
          <div className='flex flex-col gap-3'>
            <h2 className='font-bold text-[#f4c617] text-3xl'>Contact Us</h2>
            <p><span className='font-bold'>Phone Number:</span> 081293028491</p>
            <p><span className='font-bold'>Email:</span> Contact@keke.gmail.com</p>
          </div>
          <div className='flex flex-col gap-3'>
            <h2 className='font-bold text-[#f4c617] text-3xl'>Stay Connected</h2>
            <div className='flex gap-2'>
              <FaInstagramSquare width="40" height="40px" />
              <FaTwitter width="40px" height="40px"/>
              <FaLinkedin width={40} height={40}/>
            </div>
          </div>
        </div>
        <div className='bg-[#f4c617] text-black font-bold text-xl text-center p-4'>
          <h3>2024 &copy; All Rights Reserved. Keke<span className='text-white'>.com</span></h3>
        </div>
    </footer>
  )
} 

export default Footer;