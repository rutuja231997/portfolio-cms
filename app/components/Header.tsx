"use client";

import {motion} from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

import Link from "next/link";
import { Social } from "@/types/types";

type Props = { socials: Social[] };

export default function Header({ socials }: Props) {
  return (
    <header className="lg:sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-130 duration-300 ..."
          />
        ))}
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center text-gray space-x-1.5 "
        >
          <EnvelopeIcon className="h-7 w-7 text-[gray] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-130 duration-300 .." />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-130 duration-300 ..">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
