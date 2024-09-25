import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

interface MainLayoutProps {
  headerSlot?: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ headerSlot }) => {
  return (
    <div className="min-h-screen w-screen bg-background px-16 text-base-color">
      <div className="mx-auto max-w-[1312px]">
        {headerSlot}
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
