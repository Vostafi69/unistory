import { Button } from "@/shared/ui/button";
import { FC } from "react";
import { useConnect } from "wagmi";

export const ConnectMetamaskButton: FC = () => {
  const { connectors, connect, status } = useConnect();

  const handleConnect = () => {
    connect({ connector: connectors[0] });
  };

  return (
    <Button onClick={handleConnect}>
      {status === "pending" && "Connecting..."}
      {status === "idle" && "Connect " + connectors[0].name}
      {status === "error" && "Connection error"}
    </Button>
  );
};
