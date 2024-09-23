import { createBrowserRouter } from "react-router-dom";
import { MainPage, MemberPage } from "../../../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/member/:memberid",
    element: <MemberPage />,
  },
]);
