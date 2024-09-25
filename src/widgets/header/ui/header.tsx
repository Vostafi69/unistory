import { ConnectMetamaskButton } from "@/features";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <header className="flex h-[72px] w-full items-center justify-between text-white">
      <div className="flex h-[44px] w-[199px] items-center justify-center border border-dashed border-[#C7C7C7] bg-[#5A5A5A]">
        Logo
      </div>
      <ConnectMetamaskButton />
    </header>
  );
};
