import Image from "next/image";
import React from "react";

export default function CardSatisfaction() {
  return (
    <div className="absolute right-[5px] top-[160px] z-50 flex h-[109px] w-[202px] gap-4 rounded-3xl bg-white-hero p-6 shadow-profile-shadow">
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
