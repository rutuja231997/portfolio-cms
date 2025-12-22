"use client";

import { motion } from "framer-motion";
import { Skill as SkillType } from "@/types/types";
import { urlFor } from "@/sanity/lib/image";

import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css';


type Props = { directionLeft?: boolean; skill: SkillType, active:boolean, onActivate:()=>void };

function Skill({ directionLeft, skill, active, onActivate }: Props) {

  const tooltipId =  `skill-${skill._id}`;

  return (
      <div className="group relative flex cursor-pointer caret-transparent" onClick={onActivate}>
        <motion.img
          data-tooltip-id={tooltipId}
          data-tooltip-place="top"
          data-tooltip-content={skill.title}
          initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src={urlFor(skill.image).url()}
          alt={skill.image.alt}
          key={skill._id}
          className="rounded-full border border-gray-500 object-cover w-18 h-18 sm:w-22 sm:h-22 md:w-24 md:h-24 xl:w-26 xl:h-26  filter group-even-hover:grayscale transition duration-300 ease-out"
        ></motion.img>

        {/* hover overlay */}
        <Tooltip id={tooltipId} className="hidden sm:block bg-white! text-black!"/>

        <div className={`absolute inset-0 rounded-full bg-gray-300 sm:opacity-0 sm:group-hover:opacity-95 transition duration-300 ease-in-out flex flex-col items-center justify-center pointer-events-none ${active ? "opacity-95" : "opacity-0"}`}> 
             <p className="text-black text-xs sm:text-sm font-medium mt-1">{skill.progress}%</p>
        </div>
      </div>
  );
}

export default Skill;