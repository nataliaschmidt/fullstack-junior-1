import Image from "next/image";
import React from "react";
import CardList from "./CardList";
import CardProfile from "./CardProfile";
import CardSatisfaction from "./CardSatisfaction";

export default function Right() {
  return (
    <div className="relative h-[639px] w-[859px]">
      <Image
        className="absolute top-[280px] z-50"
        alt="dot ornament"
        src="/images/hero_right/ornament_vertical.svg"
        width={80}
        height={176}
      />
      <Image
        className="absolute bottom-[50px] left-[40px] z-10"
        alt="funny woman with curly hair, raising palm and smile in background pink"
        src="/images/hero_right/woman.png"
        width={694.73}
        height={617.7}
      />
      <Image
        className="absolute bottom-[70px] left-[120px] z-0"
        alt="background image in dark blue color"
        src="/images/hero_right/vector.svg"
        width={514.52}
        height={544.93}
      />
      <Image
        className="absolute left-[570px] z-50"
        alt="dot ornament"
        src="/images/hero_right/ornament_horizontal.svg"
        width={180}
        height={176}
      />
      <CardList />
      <CardProfile />
      <CardSatisfaction />
    </div>
  );
}
