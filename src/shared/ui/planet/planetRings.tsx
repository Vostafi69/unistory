import { FC } from "react";
import { motion } from "framer-motion";

export const PlanetRings: FC = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{
        duration: 1,
        delay: 0.25,
        ease: "easeOut",
      }}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute left-1/2 top-1/2 h-[532px] w-[532px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#212124]" />
      <div className="absolute left-1/2 top-1/2 h-[526px] w-[526px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-background blur-[22px]" />
      <div className="absolute left-1/2 top-1/2 h-[446px] w-[446px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1E1E20]" />
      <div className="absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#323232]" />
      <div className="absolute left-1/2 top-1/2 h-[384px] w-[384px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#323232]" />
      <div className="absolute left-1/2 top-1/2 h-[486px] w-[486px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full border-[0.5px] border-primary border-b-transparent border-l-transparent" />
    </motion.div>
  );
};
