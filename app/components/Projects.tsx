"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { urlFor } from "@/sanity/lib/image";
import { Project } from "@/types/types";

import Link from "next/link";
import { LinkIcon } from "@heroicons/react/24/solid";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = { projects: Project[] };
function Projects({ projects }: Props) {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="min-h-screen relative flex overflow-hidden flex-col md:flex-row max-w-full justify-center mx-auto items-center z-0"
      >
        <h3 className="text-center absolute top-12 md:top-14 z-30 uppercase tracking-[20px] text-gray-500 text-base sm:text-lg md:text-xl xl:text-2xl">
          Projects
        </h3>
        <div className="relative top-4 w-full snap-x snap-mandatory z-20 ">
          <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-125 -skew-y-12"></div>
          <Carousel
            selectedItem={activeSlide} // Set the active slide based on the state
            onChange={(index) => setActiveSlide(index)} // Update activeSlide state when the slide changes
            showThumbs={false} // Hide the thumbnails
            showStatus={false} // Hide the status bar
            showIndicators={true} // Hide the slide indicators
            infiniteLoop={true} // Enable infinite loop
            autoPlay={true} // Enable auto-play
            interval={5000} // Set auto-play interval to 5 seconds
            stopOnHover={false} // Disable auto-play pause on hover
            className="bg-[rgb(36,36,36)] "
          >
            {projects?.map((project) => (
              <div
                key={project._id}
                className="w-screen shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-2 min-h-screen hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200"
              >
                <Link href={project?.linkToBuild}>
                  <motion.img
                    initial={{ y: -300, opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    src={urlFor(project.image).url()}
                    alt={project.image.alt}
                    className="shrink-0 h-42 w-60 md:h-56 md:w-96"
                  />
                </Link>

                <div className="space-y-2 px-0 md:px-10 max-w-6xl">
                  <h4 className="text-lg sm:text-2xl md:text-3xl xl:text-4xl font-semibold text-center  text-white">
                    <span className="underline decoration-[#F7AB0A]/50">
                      {project?.title}
                    </span>
                  </h4>

                  <div className="flex justify-center items-center w-auto space-x-10">
                    <div className="flex float-right space-x-5">
                      {project?.stack.map((stack) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          className="object-contain h-8 w-8"
                          alt={stack.image.alt}
                          key={stack._id}
                          src={urlFor(stack.image).url()}
                        />
                      ))}
                    </div>
                    <div className="flex float-left">
                      <Link href={project?.linkToBuild}>
                        <LinkIcon className="h-7 w-7 text-[gray] " />
                      </Link>
                    </div>
                  </div>

                  <div className="text-sm sm:text-base xl:text-lg text-center md:text-left text-white pr-2 max-h-[120px] sm:max-h-[160px] overflow-y-auto md:max-h-none md:overflow-visible">
                    {project?.summary}
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </motion.div>

  );
}

export default Projects;
