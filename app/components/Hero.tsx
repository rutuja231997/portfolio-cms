"use client";

import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";

import { PageInfo, Social } from "@/types/types";
import { urlFor } from "@/sanity/lib/image";
import {motion} from "framer-motion";
import { useState } from "react";


type Props = { pageInfo: PageInfo, socials:Social[] };

const navbar = [{id:"1", href:"#about", title:"About"}, {id:"2", href:"#experience", title:"Experience"}, {id:"3", href:"#skills", title:"Skills"}, {id:"4", href:"#projects", title:"Projects"}, {id:"5", href:"#contact", title:"Contact"}]

export default function Hero({ pageInfo, socials }: Props) {

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

          <motion.div 
            whileHover={{ scale:1.1 }}
            whileTap={{ scale:0.95 }}
            className="caret-transparent absolute mb-130 sm:mb-150 mt-70">
            <a href={pageInfo.resume?.asset?.url} target="_blank" rel="noopener noreferrer" className="heroButton">Download Resume</a> 
          </motion.div>

          <div className="absolute rounded-full overflow-hidden md:h-32 md:w-32 sm:h-28 sm:w-28 h-22 w-22">
            <Image
              src={urlFor(pageInfo.heroImage).url()}
              alt={pageInfo.heroImage.alt}
              className="object-cover"
              fill
            />
          </div>

          <div className="absolute sm:mt-60 mt-50 space-y-2 sm:space-y-0 ">
          <h2 className="text-xs md:text-sm uppercase p-0 sm:p-2 tracking-[8px] md:tracking-[15px]">
              {pageInfo.role}
          </h2>
          <h1 className="text-xl phone:text-2xl sm:text-3xl md:text-5xl font-semibold p-0 sm:p-2">
            <span > {text} </span>
            <Cursor cursorColor="#F7AB0A"/>
          </h1>
          </div>

          {/* hero buttons : desktop | social icons : mobile */}
          <div className="sm:hidden visible absolute mt-85 xs:mt-78 phone-sm:mt-80 p-1 sm:p-2 flex flex-row justify-center items-center space-x-2">
            {socials.map((social) => {
              return(
              <motion.div 
                key={social._id}
                whileHover={{ scale:1.3, y:-4 }} 
                transition={{ type:"spring", stiffness:300 }}
                >
                  <SocialIcon
                    key={social._id}
                    url={social.url}
                    fgColor="gray"
                    bgColor="transparent" 
                  />
              </motion.div>
              )
            })}

          </div>

          <div className="hidden sm:flex absolute mt-90 p-1 sm:p-2 flex-row justify-center items-center space-x-2">
            {navbar.map((n)=>{

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
       </div>
    </div>
  );
}
