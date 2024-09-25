import { FC } from "react";
import { RoadmapStatsItem } from "./roadmapStatsItem";

const ROADMAP_STATS = [
  {
    value: "12, 345",
    desc: "Lorem ipsum dolor",
  },
  {
    value: "12, 345",
    desc: "Lorem ipsum dolor",
  },
  {
    value: "12, 345",
    desc: "Lorem ipsum dolor",
  },
];

export const RoadmapStatsList: FC = () => {
  return (
    <dl className="space-y-2 divide-y-[0.5px] divide-[#D2C4C4] [&>:not(:first-child)]:pt-2">
      {ROADMAP_STATS.map((stat, index) => (
        <RoadmapStatsItem key={index} desc={stat.desc} value={stat.value} />
      ))}
    </dl>
  );
};
