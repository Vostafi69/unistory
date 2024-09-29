import { FC } from "react";
import { useUserCardContext } from "./userCardContext";

export const UserCardName: FC = () => {
  const { username } = useUserCardContext();

  return (
    <div className="space-y-2">
      <h3>NAME</h3>
      <p>{username}</p>
    </div>
  );
};
