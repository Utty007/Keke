/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { RefObject, useRef, useState } from 'react';
import Logo from '@/app/Assets/Logo.svg'
import Image from 'next/image';
import { FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  const emailRef: RefObject<HTMLInputElement> = useRef(null);
  const nameRef: RefObject<HTMLInputElement> = useRef(null)
  let [message, setMessage] = useState('');
  const handleSubscription = () => {
    if (!emailRef.current || !nameRef.current || !emailRef.current.value || !nameRef.current.value) {
      setMessage('Kindly fill all input fields');
    } else {
      console.log("Subscribed");
      setMessage('')
    }
  };

  return (
    <footer>
        <div className="klaviyo-form-TtUdqv"></div>
        <div className='bg-black px-10 py-16 flex flex-col md:flex-row gap-8 justify-between'>
          <Image src={Logo} alt='Keke Company Logo' />
          <div className='flex flex-col gap-3'>
            <h2 className='font-bold text-[#f4c617] text-3xl'>Contact Us</h2>
            <p className='text-white'><span className='font-bold'>Phone Number:</span> 081293028491</p>
            <p className='text-white'><span className='font-bold'>Email:</span> Contact@keke.gmail.com</p>
          </div>
          <div className='flex flex-col gap-3'>
            <h2 className='font-bold text-[#f4c617] text-3xl'>Stay Connected</h2>
            <div className='flex gap-2'>
              <FaInstagramSquare width={40} height={40} className='text-white' />
              <FaTwitter width={40} height={40} className='text-white'/>
              <FaLinkedin width={40} height={40}  className='text-white'/>
            </div>
          </div>
        </div>
        <div className='bg-[#f4c617] text-black font-bold text-xl text-center p-4'>
          <h3>2024 &copy; All Rights Reserved. Kekecruise<span className='text-white'>.com</span></h3>
        </div>
    </footer>
  )
} 

export default Footer;