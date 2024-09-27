import { FC } from "react";
import { RoutProvider } from "./routerProvider/routProvider";
import { LenisProvider } from "./scrollProvider.tsx/lenisProvider";

export const Providers: FC = () => {
  return (
    <LenisProvider>
      <RoutProvider />
    </LenisProvider>
  );
};
