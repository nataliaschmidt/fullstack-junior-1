import Image from "next/image";
import React from "react";

export default function CardProfile() {
  return (
    <div className="absolute bottom-6 right-[100px] z-50 flex h-[112px] w-[336px] gap-4 rounded-3xl bg-white-hero p-6 shadow-profile-shadow">
      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-pink-personal shadow-profile-shadow">
        <Image
          src="/images/hero_right/user.svg"
          alt="Icon user"
          width={32}
          height={32}
        />
      </div>
      <div>
        <h3 className="text-2xl font-medium leading-9">Product Designer</h3>
        <h4 className="text-lg font-normal leading-[27px]">5 Years</h4>
      </div>
    </div>
  );
}
