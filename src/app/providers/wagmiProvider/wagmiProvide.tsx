import { FC, PropsWithChildren } from "react";
import { WagmiProvider } from "wagmi";
import { config } from "./config";

export const WrapWagmiProvider: FC<PropsWithChildren> = ({ children }) => {
  return <WagmiProvider config={config}>{children}</WagmiProvider>;
};
