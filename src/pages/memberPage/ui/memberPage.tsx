import { UserCard } from "@/entities";
import { Planet } from "@/shared/ui/planet";
import { FC } from "react";

export const MemberPage: FC = () => {
  return (
    <section className="relative flex flex-row justify-between">
      <div className="mt-[96px] space-y-[48px]">
        <h1 className="font-BebasNeue text-5xl font-bold leading-none">
          PERSONAL DATA
        </h1>
        <UserCard email="123" name="123" wallet="123" />
      </div>
      <Planet
        className="absolute -right-[160px] top-[209px] !mt-0 select-none"
        planetRings={<Planet.Rings />}
      />
    </section>
  );
};
