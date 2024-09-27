import { FC, PropsWithChildren, useEffect, useRef } from "react";
import Lenis from "lenis";

export const LenisProvider: FC<PropsWithChildren> = ({ children }) => {
  const reqAnimRef = useRef<number | null>(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      reqAnimRef.current = requestAnimationFrame(raf);
    }

    reqAnimRef.current = requestAnimationFrame(raf);

    return () => {
      if (reqAnimRef.current) {
        cancelAnimationFrame(reqAnimRef.current);
      }
    };
  }, []);

  return <>{children}</>;
};
