import Image from 'next/image';
import React from 'react'
import { Service } from '../types/service';


export default function CardServices({image, title, text}: Service) {
  return (
    <div className='w-[376px] h-[186px] flex flex-col gap-4'>
      <Image
      src={image}
      alt='Service icon'
      width={64}
      height={64}
      />
      <div className='w-[300px] h-[98px] flex flex-col gap-2'>
      <h3 className="text-2xl font-medium leading-9">{title}</h3>
      <p className="text-lg font-normal leading-[27px]">{text}</p>
      </div>
    </div>
  )
}
