import { FC } from "react";

interface UserCardProps {
  name: string;
  email: string;
  wallet: string;
}

export const UserCard: FC<UserCardProps> = ({ email, name, wallet }) => {
  return (
    <div className="space-y-[22px] font-BebasNeue font-bold uppercase leading-none [&_h3]:text-2xl [&_p]:text-[32px] [&_p]:text-primary">
      <div className="space-y-2">
        <h3>NAME</h3>
        <p>{name}</p>
      </div>
      <div className="space-y-2">
        <h3>EMAIL</h3>
        <p>{email}</p>
      </div>
      <div className="space-y-2">
        <h3>WALLET</h3>
        <p>{wallet}</p>
      </div>
    </div>
  );
};
