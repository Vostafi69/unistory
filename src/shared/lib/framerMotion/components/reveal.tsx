import { motion, useAnimation, useInView } from "framer-motion";
import { FC, ReactNode, useEffect, useRef } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 1 | -1;
  axis?: "x" | "y";
  shift?: number;
}

export const Reveal: FC<RevealProps> = ({
  children,
  delay = 0,
  duration = 0.75,
  direction = 1,
  axis = "y",
  shift = 75,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="relative overflow-hidden" ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, [axis]: shift * direction },
          visible: { opacity: 1, [axis]: 0 },
        }}
        transition={{
          duration: duration,
          delay: delay,
          ease: "easeOut",
        }}
        initial="hidden"
        animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  );
};
