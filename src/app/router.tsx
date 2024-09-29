import { createBrowserRouter } from "react-router-dom";
import { MainPage, MemberPage } from "../pages";
import { MainLayout } from "./layouts/mainLayout";
import { Header } from "@/widgets";
import { PageTransition } from "@/shared/lib/framerMotion/components/pageTransition";

export const router = createBrowserRouter([
  {
    element: <MainLayout headerSlot={<Header />} />,
    children: [
      {
        path: "/",
        element: (
          <PageTransition>
            <MainPage />
          </PageTransition>
        ),
      },
      {
        path: "/member/:memberid",
        element: (
          <PageTransition>
            <MemberPage />
          </PageTransition>
        ),
      },
    ],
  },
]);
