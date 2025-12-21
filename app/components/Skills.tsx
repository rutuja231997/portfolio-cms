"use client";

import { motion } from "framer-motion";
import { Skill as SkillTypes } from "@/types/types";
import Skill from "./Skill";
import { useState } from "react";

type Props = { skills: SkillTypes[] };

function Skills({ skills }: Props) {
  const [activeSkillId, setActiveSkillId] = useState<string | null>(null)
  return (
    <motion.div className="flex relative flex-col sm:text-left md:text-left xl:flex-row max-w-500 xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-base sm:text-lg md:text-xl xl:text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-center text-xs md:text-sm">
        Hover over a skill for currency proficiency
      </h3>

      <div className="grid md:grid-cols-4 md:gap-4 grid-cols-3 gap-3">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} active={activeSkillId === skill._id} onActivate={()=>setActiveSkillId(skill._id)} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} active={activeSkillId === skill._id} onActivate={()=>setActiveSkillId(skill._id)} directionLeft  />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;