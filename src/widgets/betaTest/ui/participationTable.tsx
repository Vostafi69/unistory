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
import { Button } from "@/shared/ui/button";
import { X } from "lucide-react";
import { removeFromList } from "@/features";

const viewPortId = "scrollabelTable";

export const ParticipationTable: FC = () => {
  const currentPage = useAppSelector((state) => state.participationTable.page);
  const { isSuccess, data } = useGetUsersQuery({ page: currentPage });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user, isListed } = useAppSelector((state) => state.earlyAccess);

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
          next={() => dispatch(incrementPage())}
          loader={<Loader />}
          scrollableTarget={viewPortId}
          scrollThreshold={1}
          className="!overflow-visible"
        >
          <Table>
            <TableHeader className="sticky top-0 bg-background font-BebasNeue uppercase outline outline-1">
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Wallet</TableHead>
                <TableHead className={!isListed ? "hidden" : ""}></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="font-AvenirNextCyr">
              {user && isListed && (
                <TableRow className="!text-primary">
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <p className="w-[196px] truncate">{user.address}</p>
                  </TableCell>
                  <TableCell>
                    <Button
                      className="bg-transparent hover:bg-transparent hover:text-primary"
                      size={"icon"}
                      onClick={() => dispatch(removeFromList())}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </TableCell>
                </TableRow>
              )}
              {data.items.map(({ address, email, username, id }) => (
                <TableRow
                  className="cursor-pointer transition-colors hover:bg-white/5"
                  key={id}
                  onClick={() => navigate(`member/${id}`)}
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
