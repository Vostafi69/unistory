import { ReactNode } from "react";
import { Image } from "../image";
import { PlanetBadge } from "./planetBadge";
import { PlanetRings } from "./planetRings";
import { cn } from "@/shared/lib/utils";
import { motion } from "framer-motion";

interface PlanetProps {
  planetBadge?: ReactNode;
  planetRings?: ReactNode;
  planetPings?: boolean;
  className?: string;
}

export function Planet({
  planetBadge,
  planetRings,
  planetPings = true,
  className,
}: PlanetProps) {
  return (
    <div className={cn("!mt-0", className)}>
      <div className="relative h-[322px] w-[320px]">
        {planetRings}
        <motion.div
          className="relative z-[15] h-full w-full"
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{
            duration: 2,
            delay: 0.25,
            ease: "easeOut",
          }}
          initial="hidden"
          animate="visible"
        >
          <Image
            className="animate-spin-slow object-cover"
            fill
            src="/assets/planet.png"
            alt="Planet"
          />
        </motion.div>
      </div>
      {planetBadge}
      {planetPings && (
        <>
          <div className="absolute -top-[81px] left-1/2 h-[6px] w-[6px] -translate-y-1/2 rounded-full bg-primary before:absolute before:inset-0 before:animate-ping before:rounded-full before:bg-primary before:delay-500" />
          <div className="absolute -right-[86px] top-1/2 h-[6px] w-[6px] -translate-y-1/2 rounded-full bg-primary before:absolute before:inset-0 before:animate-ping before:rounded-full before:bg-primary" />
          <div className="absolute -bottom-[85px] left-1/2 h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-primary before:absolute before:inset-0 before:animate-ping before:rounded-full before:bg-primary before:delay-200" />
        </>
      )}
    </div>
  );
}

Planet.Badge = PlanetBadge;
Planet.Rings = PlanetRings;
