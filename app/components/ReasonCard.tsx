import Image from 'next/image'
import React from 'react'
import { reason } from '../page';

type ReasonCardProps = {
  prop: reason;
};

const ReasonCard: React.FC<ReasonCardProps> = ({prop}) => {
  return (
    <div className='flex flex-col items-center lg:items-end justify-center gap-2 max-w-[300px]'>
        <div className='bg-black w-[75px] h-[75px] rounded-full flex items-center justify-center'>
            <Image src={prop.img} alt='Reason Icon' />
        </div>
        <h2 className='text-2xl font-bold capitalize'>{prop.header}</h2>
        <p className='text-lg leading-5 lg:text-right'>{prop.description}</p>
    </div>
  )
}

export default ReasonCard;