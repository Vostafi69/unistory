import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";
import { FC } from "react";

const USERS: {
  name: string;
  email: string;
  wallet: string;
}[] = new Array(10).fill({
  name: "Amaan Hickman",
  email: "walob95230@nubotel.com",
  wallet: "0x279D9f0c10fBB3D44fEf96...",
});

export const ParticipationTable: FC = () => {
  return (
    <Table>
      <TableHeader className="font-BebasNeue uppercase">
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Wallet</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="font-AvenirNextCyr">
        {USERS.map(({ name, email, wallet }) => (
          <TableRow>
            <TableCell>{name}</TableCell>
            <TableCell>{email}</TableCell>
            <TableCell>{wallet}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
