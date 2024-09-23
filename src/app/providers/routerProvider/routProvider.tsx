import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export const RoutProvider: FC = () => {
  return <RouterProvider router={router} />;
};
