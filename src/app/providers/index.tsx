import { FC } from "react";
import { RoutProvider } from "./routerProvider/routProvider";
import { LenisProvider } from "./scrollProvider.tsx/lenisProvider";
import { ReduxProvider } from "./reduxProvider/reduxProvider";

export const Providers: FC = () => {
  return (
    <LenisProvider>
      <ReduxProvider>
        <RoutProvider />
      </ReduxProvider>
    </LenisProvider>
  );
};
