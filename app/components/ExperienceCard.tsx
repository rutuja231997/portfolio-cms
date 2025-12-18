import {motion} from "framer-motion";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Experience } from "@/types/types";

type Props = { experience: Experience };

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg justify-center items-center space-y-3 md:space-y-7 shrink-0 w-[400px] sm:w-[500px] md:w-[600px] xl:w-[700px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" w-20 h-20 md:w-32 md:h-32 rounded-full xl:w-37.5 xl:h-37.5 object-cover object-center mr-0"
        src={urlFor(experience?.companyImage).url()}
      />
      <div className="flex flex-col items-center justify-center space-y-2">
        <h4 className="text-lg md:text-xl font-light">{experience?.company}</h4>
        <p className="font-semibold text-xs sm:text-base md:text-lg">{experience?.jobTitle}</p>
        <div className="flex space-x-2 my-1">
          {experience.stack.map((stack) => (
            <Image
              key={stack._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(stack.image).url()}
              alt={stack.image.alt}
              height={10}
              width={10}
            />
          ))}
        </div>
        <p className="uppercase py-1 text-xs md:text-sm">
          {new Date(experience.dateStarted).toDateString()} - {" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}{" "}
        </p>
        <ul className="text-white space-y-1 ml-5 text-sm sm:text-base md:text-lg h-24">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;