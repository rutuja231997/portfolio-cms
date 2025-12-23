"use client";

import Link from "next/link";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";

import { PageInfo } from "@/types/types";
import { urlFor } from "@/sanity/lib/image";
import {motion} from "framer-motion";
import { useState } from "react";

type Props = { pageInfo: PageInfo };

const nav = [{id:"1", href:"#about", title:"About"}, {id:"2", href:"#experience", title:"Experience"}, {id:"3", href:"#skills", title:"Skills"}, {id:"4", href:"#contact", title:"Contact"}]

export default function Hero({ pageInfo }: Props) {

  const [activeButton, setActiveButton] = useState<string | null>(null);

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
    <div className="relative bg-transparent h-screen z-10 flex flex-col items-center justify-center text-center overflow-hidden">
       <div className="absolute inset-0 -z-10">
          <div className="galaxy-bg-animated"/>
       </div>
       <div className="text-white relative flex flex-col space-y-8 text-center  items-center justify-center">
          <BackgroundCircle />

          {/* hero buttons */}
          <div className="absolute mb-60 sm:mb-0 sm:mt-100 order-1 sm:order-4 p-1 sm:p-2 flex flex-row justify-center items-center space-x-2">
            {nav.map((n)=>{

              const isActive = activeButton === n.id;

              return (
              <motion.div
                key={n.id}
                whileHover={{ scale:1.1 }}
                whileTap={{ scale:0.95 }}
                >
                <Link key={n.id} href={n.href}>
                  <button onClick={()=>setActiveButton(n.id)} className={`heroButton cursor-pointer ${isActive ? "border-[#F7AB0A]/40 text-[#F7AB0A]/40" : ""}`}>{n.title}</button>
                </Link>
              </motion.div>
              )
            })}
          </div>
          
          <div className="absolute order-2 sm:order-2 rounded-full overflow-hidden md:h-32 md:w-32 sm:h-28 sm:w-28 h-22 w-22">
            <Image
              src={urlFor(pageInfo.heroImage).url()}
              alt={pageInfo.heroImage.alt}
              className="object-cover"
              fill
            />
          </div>

        <div className="absolute order-3 sm:order-3 sm:mt-60 mt-50 space-y-2 sm:space-y-0 ">
          <h2 className="text-xs md:text-sm uppercase p-0 sm:p-2 tracking-[8px] md:tracking-[15px]">
              {pageInfo.role}
          </h2>
          <h1 className="text-xl phone:text-2xl sm:text-3xl md:text-5xl font-semibold p-0 sm:p-2">
            <span > {text} </span>
            <Cursor cursorColor="#F7AB0A"/>
          </h1>
        </div>

        <motion.div 
          whileHover={{ scale:1.1 }}
          whileTap={{ scale:0.95 }}
          className="caret-transparent absolute order-4 sm:order-1 sm:mb-155 md:mb-170 mt-70">
           <a href={pageInfo.resume?.asset?.url} target="_blank" rel="noopener noreferrer" className="heroButton">Download Resume</a> 
        </motion.div>
       </div>
    </div>
  );
}
