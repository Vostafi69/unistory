import { FC } from "react";
import { RoadmapStatsList } from "./roadmapStatsList";

export const RoadmapStats: FC = () => {
  return (
    <div className="w-[199px] space-y-[42px] font-BebasNeue">
      <h3 className="text-center text-[32px] font-bold leading-none">
        Roadmap stats
      </h3>
      <RoadmapStatsList />
    </div>
  );
};
