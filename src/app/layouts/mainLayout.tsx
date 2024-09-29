import { AnimatePresence } from "framer-motion";
import { cloneElement, FC, ReactNode } from "react";
import { useLocation, useOutlet } from "react-router-dom";

interface MainLayoutProps {
  headerSlot?: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ headerSlot }) => {
  const location = useLocation();
  const element = useOutlet();

  console.log(element);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background px-16 text-base-color">
      <div className="mx-auto max-w-[1312px]">
        {headerSlot}
        <main>
          <AnimatePresence mode="wait">
            {element && cloneElement(element, { key: location.pathname })}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};
