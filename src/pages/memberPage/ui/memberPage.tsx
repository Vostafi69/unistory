import { Planet } from "@/shared/ui/planet";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { UserInfo } from "./userInfo";
import { Reveal } from "@/shared/lib/framerMotion/components/reveal";

export const MemberPage: FC = () => {
  const { memberid } = useParams();

  return (
    <section className="relative flex flex-row">
      <div className="relative z-30 mt-[96px] space-y-[48px]">
        <Reveal>
          <h1 className="font-BebasNeue text-5xl font-bold leading-none">
            PERSONAL DATA
          </h1>
        </Reveal>
        <UserInfo id={memberid as string} />
      </div>
      <Planet
        className="absolute -right-[160px] top-[209px] !mt-0 select-none"
        planetRings={<Planet.Rings />}
      />
    </section>
  );
};
