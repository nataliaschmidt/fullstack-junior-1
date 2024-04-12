import { Bebas_Neue } from "next/font/google";
import React from "react";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function Left() {
  return (
    <div className="relative flex h-[448px] w-[784px] flex-col">
      <h3 className="text-2xl font-medium leading-9">Hi, there!</h3>
      <h1
        className={`text-[120px] font-normal leading-[120px] ${bebasNeue.className} `}
      >
        <span className="text-pink-personal">Luxe</span> IS HERE TO BE YOUR ASSISTANCE
      </h1>
      <p className="text-2xl font-normal leading-10">
        I am here ready to help you in making creative digital products
      </p>

      <button className="absolute bottom-6 left-0 h-[60px] w-[180px] rounded-[36px] bg-pink-personal p-2 text-[18px] font-normal leading-[27px] text-white-button-hero">
        Let&apos;s Discuss
      </button>
    </div>
  );
}
