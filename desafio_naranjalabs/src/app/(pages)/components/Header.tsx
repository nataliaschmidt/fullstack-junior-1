import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex h-[120px] w-full items-center justify-between">
      <h2 className="m-[115px] text-[36px] font-semibold leading-[54px] text-pink-personal">
        Luxe
      </h2>

      <nav className="mr-40 flex gap-16 text-lg font-normal leading-[27px]">
        <Link href=""> Home </Link>
        <Link href=""> Service </Link>
        <Link href=""> Portofolio </Link>
        <Link href=""> How we works </Link>
      </nav>

      <button className="mr-[180px]">
        <Image alt="menu icon" src="/images/menu.svg" width={32} height={32} />
      </button>
    </header>
  );
}
