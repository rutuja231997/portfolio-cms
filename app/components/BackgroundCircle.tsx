import {motion} from "framer-motion";



export default function BackgroundCircle() {
  return (
    <div
      className="
        relative flex items-center justify-center
        xs:w-88 xs:h-88
        phone-sm:w-102 phone-sm:h-102
        phone:w-115 phone:h-115
        sm:h-195 sm:w-195
        md:w-220 md:h-220
        caret-transparent
      ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
                  scale: [1, 2, 2, 3, 1],
                  opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                  borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        }}
        transition={{ duration: 2.5 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* Outer purple border */}
        <div className="absolute w-[90%] h-[90%] rounded-full border-2 border-[#333333]" />

        {/* Yellow pulse */}
        <div className="absolute w-[70%] h-[70%] rounded-full border-2 border-[#F7AB0A] opacity-20 animate-pulse" />

        {/* Red ring */}
        <div className="absolute w-[50%] h-[50%] rounded-full border-2 border-[#333333]" />

        {/* Green ring */}
        <div className="absolute w-[30%] h-[30%] rounded-full border-2 border-[#333333]" />

        {/* Inner ping */}
        <div className="absolute w-[30%] h-[30%] rounded-full border-2 border-[#F7AB0A] animate-ping" />
      </motion.div>
    </div>
  );
}
