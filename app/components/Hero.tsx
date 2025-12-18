"use client";

import Link from "next/link";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";

import { PageInfo } from "@/types/types";
import { urlFor } from "@/sanity/lib/image";

type Props = { pageInfo: PageInfo };

export default function Hero({ pageInfo }: Props) {
  const [text] = useTypewriter({
    words: [
      ` Hi, I'm ${pageInfo?.name}`,
      "Girl-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <div className="relative rounded-full mx-auto overflow-hidden h-32 w-32">
        <Image
          src={urlFor(pageInfo.heroImage).url()}
          alt={pageInfo.heroImage.alt}
          className="object-cover"
          fill
        />
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
         {pageInfo.role}
        </h2>
        <h1>
          <span className="text-5xl lg:text-6xl font-semibold px-10">
            {text}
          </span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
