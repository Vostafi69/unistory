import { useGetUserQuery, UserCard } from "@/entities";
import { Loader } from "@/shared/ui/loader";
import { FC } from "react";

interface UserInfoProps {
  id: string;
}

export const UserInfo: FC<UserInfoProps> = ({ id }) => {
  const { isSuccess, isFetching, data, isError } = useGetUserQuery(id);

  if (isError) {
    return (
      <p className="font-BebasNeue text-[48px] text-primary">
        {"Can't load user data :("}
      </p>
    );
  }

  if (isFetching) {
    return <Loader />;
  }

  if (isSuccess) {
    return (
      <UserCard
        user={data}
        nameComponent={<UserCard.Name />}
        emailComponent={<UserCard.Email />}
        walletComponent={<UserCard.Address />}
      />
    );
  }
};
