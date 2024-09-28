import { Button } from "@/shared/ui/button";
import { FC } from "react";
import { useConnect } from "wagmi";

export const ConnectMetamaskButton: FC = () => {
  const { connectors, connect } = useConnect();

  const handleConnect = () => {
    connect({ connector: connectors[0] });
  };

  return <Button onClick={handleConnect}>Connect {connectors[0].name}</Button>;
};
