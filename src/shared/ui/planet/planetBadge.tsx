import { FC } from "react";
import { Badge } from "../badge";

export const PlanetBadge: FC = () => {
  return (
    <Badge className="absolute -top-[98px] right-1/2 translate-x-3 space-x-2">
      <span className="font-BebasNeue font-bold leading-none text-background">
        Q1 2022
      </span>
      <div className="flex h-3 w-3 items-center justify-center rounded-full shadow-[-2px_-2px_6px_rgba(50,_50,_50,_0.25),_2px_2px_6px_rgba(50,_50,_50,_0.25)]">
        <div className="h-[6px] w-[6px] animate-pulse rounded-full bg-primary" />
      </div>
    </Badge>
  );
};
