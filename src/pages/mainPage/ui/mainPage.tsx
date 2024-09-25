import { Badge } from "@/shared/ui/badge";
import { Image } from "@/shared/ui/image";
import { RoadmapStats } from "@/widgets";
import { FC } from "react";

export const MainPage: FC = () => {
  return (
    <section className="relative flex min-h-[700px] flex-row items-center justify-between">
      <div className="flex w-full items-start justify-between">
        <div className="relative space-y-[42px]">
          <div className="relative z-20 select-none">
            <h1 className="font-BebasNeue text-[120px] font-bold leading-none">
              Explore Your own planet <br />
              In{" "}
              <span className="text-background shadow-white text-shadow">
                our New
              </span>{" "}
              metaverse
            </h1>
            <p className="absolute left-0 top-0 !mt-0 bg-transparent font-BebasNeue text-[120px] font-bold leading-none text-primary [mask-image:_url('/mars.svg')] [mask-position:_right_24px_center] [mask-repeat:_no-repeat] [mask-size:_320px]">
              Explore Your own planet <br />
              In{" "}
              <span className="text-background shadow-white text-shadow">
                our New
              </span>{" "}
              metaverse
            </p>
          </div>
          <div className="absolute -top-[42px] right-[23px] !mt-0 select-none">
            <div className="relative h-[322px] w-[320px]">
              <div className="absolute left-1/2 top-1/2 h-[532px] w-[532px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#212124]" />
              <div className="absolute left-1/2 top-1/2 h-[526px] w-[526px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-background blur-[22px]" />
              <div className="absolute left-1/2 top-1/2 h-[446px] w-[446px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1E1E20]" />
              <div className="absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#323232]" />
              <div className="absolute left-1/2 top-1/2 h-[384px] w-[384px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#323232]" />
              <div className="absolute left-1/2 top-1/2 h-[486px] w-[486px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full border-[0.5px] border-primary border-b-transparent border-l-transparent" />
              <Image
                className="animate-spin-slow object-cover"
                fill
                src="./assets/planet.png"
                alt="Planet"
              />
            </div>
            <Badge className="absolute -top-[98px] right-1/2 translate-x-3 space-x-2">
              <span className="font-BebasNeue font-bold leading-none text-background">
                Q1 2022
              </span>
              <div className="flex h-3 w-3 items-center justify-center rounded-full shadow-[-2px_-2px_6px_rgba(50,_50,_50,_0.25),_2px_2px_6px_rgba(50,_50,_50,_0.25)]">
                <div className="h-[6px] w-[6px] animate-pulse rounded-full bg-primary" />
              </div>
            </Badge>
            <div className="absolute -right-[86px] top-1/2 h-[6px] w-[6px] -translate-y-1/2 rounded-full bg-primary before:absolute before:inset-0 before:animate-ping before:rounded-full before:bg-primary" />
            <div className="absolute -bottom-[85px] left-1/2 h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-primary before:absolute before:inset-0 before:animate-ping before:rounded-full before:bg-primary before:delay-200" />
          </div>
          <p className="max-w-[421px] font-AvenirNextCyr">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="mt-[17px]">
          <RoadmapStats />
        </div>
      </div>
    </section>
  );
};
