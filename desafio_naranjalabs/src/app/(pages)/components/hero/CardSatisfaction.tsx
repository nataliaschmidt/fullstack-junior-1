import Image from 'next/image';
import React from 'react'

export default function CardSatisfaction() {
  return (
    <div className='flex w-[202px] h-[109px] rounded-3xl p-6 gap-4 shadow-profile-shadow absolute z-50 bg-white-hero top-[160px] right-[5px]'>
      <Image
        src="/images/hero_right/star.svg"
        alt="Icon star"
        width={31}
        height={31}
      />
    <div>
      <h2 className="text-2xl font-medium leading-9">4.8</h2>
      <h4 className="text-lg font-normal leading-[27px]">Satisfaction</h4>
    </div>
  </div>
);
}
