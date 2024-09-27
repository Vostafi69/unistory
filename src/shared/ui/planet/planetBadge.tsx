import { FC } from "react";
import { Badge } from "../badge";
import { motion } from "framer-motion";

export const PlanetBadge: FC = () => {
  return (
    <motion.div
      className="absolute -top-[98px] right-1/2 translate-x-3"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{
        duration: 0.75,
        delay: 0.25,
        ease: "easeOut",
      }}
      initial="hidden"
      animate="visible"
    >
      <Badge className="space-x-2">
        <span className="font-BebasNeue font-bold leading-none text-background">
          Q1 2022
        </span>
        <div className="flex h-3 w-3 items-center justify-center rounded-full shadow-[-2px_-2px_6px_rgba(50,_50,_50,_0.25),_2px_2px_6px_rgba(50,_50,_50,_0.25)]">
          <div className="h-[6px] w-[6px] animate-pulse rounded-full bg-primary" />
        </div>
      </Badge>
    </motion.div>
  );
};
