import Image from 'next/image';
import React from 'react';

export default function CardProfile() {
  return (
    <div className='flex w-[336px] h-[112px] rounded-3xl p-6 gap-4 shadow-profile-shadow absolute z-50 bg-white-hero bottom-6 right-[100px]'>
      <div className='bg-pink-personal w-16 h-16 shadow-profile-shadow rounded-3xl flex items-center justify-center'>
        <Image
          src="/images/hero_right/user.svg"
          alt="Icon user"
          width={32}
          height={32}
        />
      </div>
      <div>
        <h2 className="text-2xl font-medium leading-9">Product Designer</h2>
        <h4 className="text-lg font-normal leading-[27px]">5 Years</h4>
      </div>
    </div>
  );
}