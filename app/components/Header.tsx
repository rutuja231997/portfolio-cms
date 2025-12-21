"use client";

import {motion} from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { EnvelopeIcon} from "@heroicons/react/24/outline";
import {Bars3Icon} from "@heroicons/react/24/outline";

import Link from "next/link";
import { Social } from "@/types/types";
import { useState } from "react";

type Props = { socials: Social[] };

export default function Header({ socials }: Props) {
  
  const [open, setOpen] = useState(false);

  return (
    <header className="p-3 sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
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

       <motion.div 
          transition={{ type: "spring", stiffness:300 }}
          whileHover={{ scale:1.1, y:-4 }} > 
            <button onClick={()=>setOpen((o)=>!o)} className="cursor-pointer lg:hidden text-[gray]"><Bars3Icon className="h-7 w-7" /></button>
      </motion.div>

        {open && (
            <div className="flex flex-col items-center space-y-2 p-2  text-white text-lg md:hidden bg-transparent absolute top-1/2 left-2 mt-4 max-w-xl w-10 rounded-lg">
              {socials.map((social) => {
                return (
                  <motion.div 
                  key={social._id}
                  whileHover={{ scale:1.3, y:-2 }} 
                  transition={{ type:"spring", stiffness:300 }}>
                    <SocialIcon
                      key={social._id}
                      url={social.url}
                      fgColor="#F7ab0a"
                      bgColor="gray" 
                    />
                </motion.div>
              
                )
              })}
            </div>
        )}
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
