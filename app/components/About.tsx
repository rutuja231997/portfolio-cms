"use client";

import {motion} from "framer-motion";
import { urlFor } from "@/sanity/lib/image";
import { AcademicCapIcon, HomeModernIcon } from "@heroicons/react/16/solid";
import { PageInfo } from "@/types/types";

type Props = { pageInfo: PageInfo}

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative min-h-screen text-center md:text-left md:flex-row max-w-7xl px-2 xl:px-10 justify-evenly md:space-x-20 mx-auto items-center"
    >
      <h3 className="absolute top-2 uppercase tracking-[20px] text-gray-500 text-base sm:text-lg md:text-xl xl:text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="mt-10 xl:mt-0 md:mb-0 shrink-0 w-40 h-40 rounded-full object-cover md:rounded-full md:w-50 md:h-50 lg:w-62.5 lg:h-62.5 "
      />

      <div className="space-y-4 sm:space-y-2 md:space-y-2 p-2">
        <h4 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-xs sm:text-sm md:text-base xl:text-lg">
          {pageInfo?.backgroundInformation}
        </p>

        <div className="flex flex-row space-x-4 text-white text-xs sm:text-sm md:text-base xl:text-xl">
            <h3 className="flex flex-row gap-2 text-sm md:text-base xl:text-xl"><span><AcademicCapIcon className="h-5 w-5 md:h-7 md:w-7 text-[#F7AB0A]" /></span><span>Education</span></h3>
            <ul>
              <li>
                 2021-2022 ⇢ Thakur Institute of Management Studies and Research
                (Mumbai University).
              </li>
              <li> MCA Degree</li>
            </ul>
        </div>

        <div className="flex flex-row space-x-10 sm:space-x-5 md:space-x-10 text-white text-xs sm:text-sm md:text-base xl:text-xl">
          <h3 className="flex flex-row gap-2 ">
            <span><HomeModernIcon className="h-5 w-5 md:h-7 md:w-7 text-[#F7AB0A]"/></span>
            <span className="">Hometown</span>
          </h3>
          <p className="">Mumbai</p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
