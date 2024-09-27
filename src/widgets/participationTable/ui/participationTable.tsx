import { useGetUsersQuery } from "@/entities";
import { ScrollArea } from "@/shared/ui/scrollArea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";
import { FC } from "react";

export const ParticipationTable: FC = () => {
  const { isSuccess, isFetching, data } = useGetUsersQuery({ perPage: 20 });

  return (
    <ScrollArea
      className="h-[590px] pr-[97px]"
      type="auto"
      scrollAreaScrollbarClassName="!right-[56px] pt-[41px] px-[3px] after:absolute after:top-[42px] after:rounded-full after:bottom-0 after:w-[1px] after:bg-white after:left-[4px] after:opacity-60 after:-z-[1]"
      data-lenis-prevent
    >
      <Table>
        <TableHeader className="sticky top-0 bg-background font-BebasNeue uppercase outline outline-1">
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Wallet</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="font-AvenirNextCyr">
          {isSuccess &&
            data.items.map(({ address, email, username, id }) => (
              <TableRow key={id}>
                <TableCell>{username}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>
                  <p className="w-[196px] truncate">{address}</p>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </ScrollArea>
  );
};
