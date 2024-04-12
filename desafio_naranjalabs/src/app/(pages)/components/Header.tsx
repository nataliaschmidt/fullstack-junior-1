import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-around w-full h-[120px]">
      <h2 className="text-[36px] font-semibold leading-[54px] text-pink-personal">
        Luxe
      </h2>

      <nav className="font-normal text-lg leading-[27px] flex gap-14">
        <Link href=""> Home </Link>
        <Link href=""> Service </Link>
        <Link href=""> Portofolio </Link>
        <Link href=""> How we works </Link>
      </nav>

      <button>
        <Image
          alt="menu icon"
          src='/images/menu.svg'
          width={32}
          height={32}
        />
      </button>

    </header>
  );
}
