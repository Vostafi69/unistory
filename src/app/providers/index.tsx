import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { LenisProvider } from "./scrollProvider.tsx/lenisProvider";
import { WrapWagmiProvider } from "./wagmiProvider/wagmiProvide";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { router } from "../router";

const queryClient = new QueryClient();

export const Providers: FC = () => {
  return (
    <LenisProvider>
      <WrapWagmiProvider>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <RouterProvider router={router} />
          </Provider>
        </QueryClientProvider>
      </WrapWagmiProvider>
    </LenisProvider>
  );
};
