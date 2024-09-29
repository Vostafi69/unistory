import { useGetUsersQuery } from "@/entities";
import { useAppDispatch, useAppSelector } from "@/shared/lib/rtk/hooks";
import { Loader } from "@/shared/ui/loader";
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
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import { incrementPage } from "../model/participationTableSlice";

const viewPortId = "scrollabelTable";

export const ParticipationTable: FC = () => {
  const currentPage = useAppSelector((state) => state.participationTable.page);
  const { isSuccess, data } = useGetUsersQuery({ page: currentPage });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleRowClick = (id: number) => {
    navigate(`member/${id}`);
  };

  const handleGetNext = () => {
    dispatch(incrementPage());
  };

  return (
    <ScrollArea
      className="h-[590px] pr-[97px]"
      type="auto"
      scrollAreaScrollbarClassName="!right-[56px] pt-[41px] px-[3px] after:absolute after:top-[42px] after:rounded-full after:bottom-0 after:w-[1px] after:bg-white after:left-[4px] after:opacity-60 after:-z-[1]"
      data-lenis-prevent
      viewPortId={viewPortId}
    >
      {isSuccess && (
        <InfiniteScroll
          dataLength={data.items.length}
          hasMore={data.meta.totalPages > currentPage}
          next={handleGetNext}
          loader={<Loader />}
          scrollableTarget={viewPortId}
          scrollThreshold={1}
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
              {data.items.map(({ address, email, username, id }) => (
                <TableRow
                  className="cursor-pointer transition-colors hover:bg-white/5"
                  key={id}
                  onClick={() => handleRowClick(id)}
                >
                  <TableCell>{username}</TableCell>
                  <TableCell>{email}</TableCell>
                  <TableCell>
                    <p className="w-[196px] truncate">{address}</p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </InfiniteScroll>
      )}
    </ScrollArea>
  );
};
