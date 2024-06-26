import React from 'react';
import Logo from '../Assets/Logo';

function Header() {
  return (
    <div className='bg-white text-black flex items-center justify-between px-5 py-3'>
        <div>
            <Logo />
        </div>
        <div className='text-4xl font-bold hidden md:block'>
          <h3>KEKE<span className='text-[#f4c617]'>.COM</span></h3>
        </div>
        <div>
          <a href='#app' className='bg-[#f4c716] text-black rounded-full px-4 py-2 text-lg'>Get The App</a>
        </div>
    </div>
  )
}

export default Header;