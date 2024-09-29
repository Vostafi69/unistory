import { createContext, useContext } from "react";
import { User } from "../model/types";

export const UserCardContext = createContext<User | null>(null);
export const useUserCardContext = () => {
  const context = useContext(UserCardContext);
  if (!context) {
    throw new Error("UserCard.* component must be used within a UserCard");
  }

  return context;
};
