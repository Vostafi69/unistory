import { FC } from "react";
import { RoadmapStatsList } from "./roadmapStatsList";
import { Reveal } from "@/shared/lib/components/reveal";

export const RoadmapStats: FC = () => {
  return (
    <div className="relative w-[199px] space-y-[42px] font-BebasNeue">
      <Reveal delay={0.25}>
        <h3 className="text-center text-[32px] font-bold leading-none">
          Roadmap stats
        </h3>
      </Reveal>
      <RoadmapStatsList />
    </div>
  );
};
