import { FC } from "react";

interface RoadmapStatsItemProps {
  value: string;
  desc: string;
}

export const RoadmapStatsItem: FC<RoadmapStatsItemProps> = ({
  value,
  desc,
}) => {
  return (
    <div className="space-y-3 text-center">
      <dt className="text-[28px] font-bold leading-none text-primary">
        {value}
      </dt>
      <dd className="text-lg leading-tight">{desc}</dd>
    </div>
  );
};
