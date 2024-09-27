import { ConnectMetamaskButton } from "@/features";
import { Reveal } from "@/shared/lib/framerMotion/components/reveal";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <header className="flex h-[72px] w-full items-center justify-between text-white">
      <Reveal direction={-1} delay={0.25}>
        <div className="flex h-[44px] w-[199px] items-center justify-center border border-dashed border-[#C7C7C7] bg-[#5A5A5A]">
          Logo
        </div>
      </Reveal>
      <Reveal direction={-1} delay={0.45}>
        <ConnectMetamaskButton />
      </Reveal>
    </header>
  );
};
