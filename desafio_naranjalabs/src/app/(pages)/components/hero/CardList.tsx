import Image from "next/image";
import React from "react";

export default function CardList() {
  return (
    <div className="absolute left-[32px] top-[90px] z-50 flex h-[112px] w-[200px] gap-4 rounded-3xl bg-white-hero p-6 shadow-profile-shadow">
      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-pink-personal shadow-profile-shadow">
        <Image
          src="/images/hero_right/list.svg"
          alt="Icon list"
          width={32}
          height={32}
        />
      </div>
      <div>
        <h2 className="text-2xl font-medium leading-9">2K +</h2>
        <h4 className="text-lg font-normal leading-[27px]">Projects</h4>
      </div>
    </div>
  );
}
