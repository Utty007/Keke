import Image from 'next/image'
import React from 'react'
import appInterface from '@/app/Assets/appInterface.png'
import { BiLogoPlayStore } from 'react-icons/bi'

function DownloadApp() {
  return (
      <div id='app' className='bg-white flex-col-reverse flex md:flex-row gap-6 p-8 items-center'>
        <Image src={appInterface} alt='App Interface' /> 
        <div className='max-w-[600px]'>
            <h1 className='text-5xl font-bold text-[#f4c617] leading-normal'>Anticipate Our App</h1>
            <p>The Keke app is a smart bike sharing application designed for institutions, offering a seamless and user-friendly experience. Join the green movement with Keke and enjoy a healthier, eco-friendly commuting option with our secure and reliable bicycle system. <br /> <br /> <span className='font-bold text-xl'>Coming Soon To Playstore And Appstore!</span></p>
            <div className='hidden'>
                <button className='flex flex-row bg-[#f4c617] text-black px-3 py-1 items-center gap-1'>
                    <BiLogoPlayStore width={40} height={40} /> <div className='flex flex-col items-start'>
                        <span className='text-sm'>Get It On</span>
                        <span className='text-lg font-medium'>Playstore</span>
                    </div>
                </button>
                <button></button>
            </div>
        </div>
    </div>
  )
}

export default DownloadApp;