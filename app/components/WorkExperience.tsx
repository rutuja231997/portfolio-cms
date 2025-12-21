"use client";

import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";
import { Experience as ExperienceType } from "@/types/types";

type Props = { experiences: ExperienceType[] };

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex relative overflow-hidden flex-col text-col xl:text-left md:flex-row max-w-full md:px-10 justify-center mx-auto items-center"
    >
      <h3 className="absolute top-15 md:top-12 text-center uppercase tracking-[20px] text-gray-500 text-base sm:text-lg md:text-xl xl:text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 p-10 snap-x snap-mandator justify-center align-center mt-14">
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;