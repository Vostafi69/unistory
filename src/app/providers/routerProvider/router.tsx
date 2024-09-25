import { createBrowserRouter } from "react-router-dom";
import { MainPage, MemberPage } from "../../../pages";
import { MainLayout } from "../../layouts/mainLayout";
import { Header } from "@/widgets";

export const router = createBrowserRouter([
  {
    element: <MainLayout headerSlot={<Header />} />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/member/:memberid",
        element: <MemberPage />,
      },
    ],
  },
]);
