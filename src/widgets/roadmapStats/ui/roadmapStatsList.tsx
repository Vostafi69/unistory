import { FC } from "react";
import { RoadmapStatsItem } from "./roadmapStatsItem";
import { Reveal } from "@/shared/lib/framerMotion/components/reveal";

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
    <dl>
      {ROADMAP_STATS.map((stat, index) => (
        <div key={index}>
          <Reveal delay={0.25 * ++index}>
            <RoadmapStatsItem desc={stat.desc} value={stat.value} />
          </Reveal>
          <Reveal delay={0.25} axis="x" shift={200}>
            <div className="my-2 h-[0.5px] w-full bg-[#D2C4C4]" />
          </Reveal>
        </div>
      ))}
    </dl>
  );
};
