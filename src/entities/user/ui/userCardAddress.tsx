import { FC } from "react";
import { useUserCardContext } from "./userCardContext";

export const UserCardAddress: FC = () => {
  const { address } = useUserCardContext();

  return (
    <div className="space-y-2">
      <h3>WALLET</h3>
      <p>{address}</p>
    </div>
  );
};
