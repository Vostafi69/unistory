import { Button } from "@/shared/ui/button";
import { FC } from "react";

interface GetEarlyAccessButtonProps {
  disabled?: boolean;
}

export const GetEarlyAccessButton: FC<GetEarlyAccessButtonProps> = ({
  disabled = false,
}) => {
  return (
    <Button disabled={disabled} className="uppercase" type="submit">
      Get EARLY ACCESS
    </Button>
  );
};
