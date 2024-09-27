import { FC, HTMLAttributes } from "react";
import { cn } from "../lib/utils";

interface LoaderProps extends HTMLAttributes<HTMLDivElement> {}

export const Loader: FC<LoaderProps> = ({ className, ...props }) => {
  return (
    <div className={cn("w-full text-center", className)} {...props}>
      <div className="flex h-10 items-center justify-center space-x-2 bg-transparent">
        <span className="sr-only">Loading...</span>
        <div className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]"></div>
        <div className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]"></div>
        <div className="h-2 w-2 animate-bounce rounded-full bg-primary"></div>
      </div>
    </div>
  );
};
