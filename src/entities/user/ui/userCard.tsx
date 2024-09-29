import { ReactNode } from "react";
import { UserCardContext } from "./userCardContext";
import { User } from "../model/types";
import { UserCardName } from "./userCardName";
import { UserCardEmail } from "./userCardEmail";
import { UserCardAddress } from "./userCardAddress";
import { Reveal } from "@/shared/lib/framerMotion/components/reveal";

interface UserCardProps {
  nameComponent?: ReactNode;
  emailComponent?: ReactNode;
  walletComponent?: ReactNode;
  user: User;
}

export function UserCard({
  nameComponent,
  emailComponent,
  walletComponent,
  user,
}: UserCardProps) {
  return (
    <UserCardContext.Provider value={user}>
      <div className="space-y-[22px] font-BebasNeue font-bold uppercase leading-none [&_h3]:text-2xl [&_p]:text-[32px] [&_p]:text-primary">
        <Reveal delay={0.25}>{nameComponent}</Reveal>
        <Reveal delay={0.35}>{emailComponent}</Reveal>
        <Reveal delay={0.45}>{walletComponent}</Reveal>
      </div>
    </UserCardContext.Provider>
  );
}

UserCard.Name = UserCardName;
UserCard.Email = UserCardEmail;
UserCard.Address = UserCardAddress;
