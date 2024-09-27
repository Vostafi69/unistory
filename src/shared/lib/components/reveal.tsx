import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "top" | "bottom";
}

export const Reveal: FC<RevealProps> = ({
  children,
  delay = 0,
  duration = 0.75,
  direction = "top",
}) => {
  const dirValue = direction === "top" ? 1 : -1;

  return (
    <div className="relative overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 73 * dirValue },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{
          duration: duration,
          delay: delay,
          ease: "easeOut",
        }}
        initial="hidden"
        animate="visible"
      >
        {children}
      </motion.div>
    </div>
  );
};
