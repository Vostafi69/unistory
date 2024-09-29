import { FC } from "react";
import { useUserCardContext } from "./userCardContext";

export const UserCardEmail: FC = () => {
  const { email } = useUserCardContext();

  return (
    <div className="space-y-2">
      <h3>EMAIL</h3>
      <p>{email}</p>
    </div>
  );
};
