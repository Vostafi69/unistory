import { store } from "@/app/store/store";
import { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";

export const ReduxProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
