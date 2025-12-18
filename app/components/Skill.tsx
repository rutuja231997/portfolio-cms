"use client";

import { motion } from "framer-motion";
import { Skill  as SkillType } from "@/types/types";
import { urlFor } from "@/sanity/lib/image";


type Props = { directionLeft?: boolean; skill: SkillType };

function Skill({ directionLeft, skill }: Props) {
  return (
      <div className="group relative flex cursor-pointer">
        <motion.img
          initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src={urlFor(skill.image).url()}
          alt={skill.image.alt}
          key={skill._id}
          className="rounded-full border border-gray-500 object-cover  w-22 h-22 md:w-24 md:h-24 xl:w-26 xl:h-26  filter group-even-hover:grayscale transition duration-300 ease-out"
        ></motion.img>
      </div>
  );
}

export default Skill;