"use client";

import {motion} from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { EnvelopeIcon} from "@heroicons/react/24/outline";
import {Bars3Icon} from "@heroicons/react/24/outline";

import Link from "next/link";
import { Social } from "@/types/types";
import { useState, useRef } from "react";
import Popover from "./Popover";

import {
  UserIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

type Props = { socials: Social[] };

const nav = [{id:"1", href:"#about", title:"About", Icon:UserIcon}, {id:"2", href:"#experience", title:"Experience", Icon:BriefcaseIcon}, {id:"3", href:"#skills", title:"Skills", Icon:WrenchScrewdriverIcon}, {id:"4", href:"#projects", title:"Projects", Icon:CodeBracketIcon}]

export default function Header({ socials }: Props) {
  
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

    const [activeButton, setActiveButton] = useState<string | null>(null);

  return (
    <header className="p-3 sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {/* desktop socials */}
        <div
          className="hidden lg:flex items-center relative">
          {socials.map((social) => (
          
            <motion.div 
            key={social._id}
             whileHover={{ scale:1.3, y:-4 }} 
             transition={{ type:"spring", stiffness:300 }}>
              <SocialIcon
                key={social._id}
                url={social.url}
                fgColor="gray"
                bgColor="transparent" 
              />
            </motion.div>
        
          ))}
        </div>

        <div className="relative lg:hidden" ref={menuRef}>
          <motion.div 
          transition={{ type: "spring", stiffness:300 }}
          whileHover={{ scale:1.1, y:-4 }} > 
            <button onClick={()=>setOpen((o)=>!o)} className="cursor-pointer lg:hidden text-[gray]"><Bars3Icon className="h-7 w-7" /></button>
          </motion.div>

          <Popover containerRef={menuRef} isOpen={open} onClose={()=>setOpen(false)}  className="absolute top-1/2 left-2 right-0 mt-4 flex flex-col items-center space-y-2 p-2 rounded-lg">
              {nav.map((n) => {
                 const isActive = activeButton === n.id;
                return (
                  <motion.div 
                  key={n.id}
                  whileHover={{ scale:1.3, y:-2 }} 
                  transition={{ type:"spring", stiffness:300 }}>
                    <Link key={n.id} href={n.href}>
                        <button onClick={()=>setActiveButton(n.id)} className={`heroButton cursor-pointer ${isActive ? "border-[#F7AB0A]/40 text-[#F7AB0A]/40" : ""}`}><n.Icon className="h-7 w-7"/></button>
                    </Link>
                </motion.div>
              
                )
              })}
          </Popover>
        </div>



      </motion.div>

      <Link href="#contact">
        <motion.div
          transition={{ type: "spring", stiffness:300 }}
          whileHover={{ scale:1.1, y:-4 }} 
          className="flex flex-row items-center text-gray space-x-1.5 "
        >
          <EnvelopeIcon className="h-7 w-7 text-[gray]" />
          <p className="uppercase hidden lg:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </motion.div>
      </Link>


    </header>
  );
}
