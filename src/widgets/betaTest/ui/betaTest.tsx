import { UserCard } from "@/entities";
import { addTolist, GetEarlyAccessForm } from "@/features";
import { Reveal } from "@/shared/lib/framerMotion/components/reveal";
import { Button } from "@/shared/ui/button";
import { FC } from "react";
import { ParticipationTable } from "./participationTable";
import { useAppDispatch, useAppSelector } from "@/shared/lib/rtk/hooks";
import { useAccount } from "wagmi";

export const BetaTest: FC = () => {
  const { user, isListed } = useAppSelector((state) => state.earlyAccess);
  const { address } = useAccount();
  const dispatch = useAppDispatch();

  return (
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Reveal>
        {!user ? (
          <div className="mt-9">
            <GetEarlyAccessForm />
            {!address && (
              <Reveal delay={0.35}>
                <span className="mt-[19px] block font-BebasNeue text-sm font-bold uppercase leading-none text-white">
                  YOU NEED TO CONNECT WALLET BEFORE REGISTRATION
                </span>
              </Reveal>
            )}
          </div>
        ) : (
          <div className="mt-9">
            <UserCard
              user={user}
              nameComponent={<UserCard.Name />}
              emailComponent={<UserCard.Email />}
            />
            <Reveal delay={0.25}>
              <Button
                disabled={isListed}
                className="mt-[28px]"
                onClick={() => dispatch(addTolist())}
              >
                LIST ME TO The TABLE
              </Button>
            </Reveal>
          </div>
        )}
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
  );
};
