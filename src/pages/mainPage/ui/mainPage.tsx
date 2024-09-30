import {
  ParticipationTable,
  RegistrBetaAccessForm,
  RoadmapStats,
} from "@/widgets";
import { FC } from "react";
import { Reveal } from "@/shared/lib/framerMotion/components/reveal";
import { Planet } from "@/shared/ui/planet";
import { motion } from "framer-motion";

export const MainPage: FC = () => {
  return (
    <>
      <section className="relative flex min-h-[628px] flex-row items-end justify-between pb-[60px]">
        <div className="flex w-full items-start justify-between">
          <div className="relative space-y-[42px]">
            <motion.div className="relative select-none">
              <h1 className="relative z-10 font-BebasNeue text-[120px] font-bold leading-none">
                <Reveal delay={0.25}>Explore Your own planet</Reveal>
                <Reveal delay={0.45}>
                  In{" "}
                  <span className="text-background shadow-white text-shadow">
                    our New
                  </span>{" "}
                  metaverse
                </Reveal>
              </h1>
              <motion.div
                className={`absolute left-0 top-0 z-30 !mt-0 bg-transparent font-BebasNeue text-[120px] font-bold leading-none text-primary [mask-image:_url('/mars.svg')] [mask-position:_right_24px_center] [mask-repeat:_no-repeat] [mask-size:_322px]`}
              >
                <Reveal delay={0.25}>Explore Your own planet</Reveal>
                <Reveal delay={0.45}>
                  In{" "}
                  <span className="text-background shadow-white text-shadow">
                    our New
                  </span>{" "}
                  metaverse
                </Reveal>
              </motion.div>
            </motion.div>
            <Planet
              className="absolute -top-[41px] right-[25px] !mt-0 select-none"
              planetBadge={<Planet.Badge />}
              planetRings={<Planet.Rings />}
            />
            <Reveal delay={0.55}>
              <p className="max-w-[421px] font-AvenirNextCyr">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Reveal>
          </div>
          <div className="mt-[17px]">
            <RoadmapStats />
          </div>
        </div>
      </section>
      <section className="flex flex-row justify-between pb-[86px] pt-12">
        <div className="w-[421px]">
          <Reveal>
            <h2 className="font-BebasNeue text-3xl font-bold text-primary">
              Beta test registration
            </h2>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-[18px] font-AvenirNextCyr">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Reveal>
          <div className="mt-9">
            <RegistrBetaAccessForm />
          </div>
        </div>
        <div className="w-full max-w-[741px]">
          <h2 className="font-BebasNeue text-3xl font-bold">
            Participation listing (enable only for participants)
          </h2>
          <div className="mt-9">
            <ParticipationTable />
          </div>
        </div>
      </section>
    </>
  );
};
