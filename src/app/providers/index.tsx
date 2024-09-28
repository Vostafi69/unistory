import { FC } from "react";
import { RoutProvider } from "./routerProvider/routProvider";
import { LenisProvider } from "./scrollProvider.tsx/lenisProvider";
import { WrapWagmiProvider } from "./wagmiProvide/wagmiProvide";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "../store/store";

const queryClient = new QueryClient();

export const Providers: FC = () => {
  return (
    <LenisProvider>
      <WrapWagmiProvider>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <RoutProvider />
          </Provider>
        </QueryClientProvider>
      </WrapWagmiProvider>
    </LenisProvider>
  );
};
