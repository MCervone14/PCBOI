import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
} from "../ui/table";
import RowView from "./RowView";

const TableView = ({ title, category, released }: any) => {
  return (
    <Table className="p-2 bg-slate-900 h-full w-full">
      <TableHeader>
        <TableRow className="border-primary w-full flex justify-center items-center">
          <TableHead className="w-full h-full text-primary text-md font-extrabold flex-1 p-1 text-yellow-500">
            {title}
          </TableHead>

          <TableHead className="w-full flex-1 text-primary p-0 text-center hidden place-content-center sm:inline-grid  lg:hidden xl:inline-grid">
            Title
          </TableHead>
          {!released && (
            <TableHead className="w-full flex-1 text-primary p-0 text-center hidden sm:inline-grid place-content-center">
              {" "}
              Release Date
            </TableHead>
          )}

          {released && (
            <TableHead className="w-full flex-1 text-primary p-0 text-center hidden sm:inline-grid place-content-center">
              Rating
            </TableHead>
          )}
          <TableHead className="w-full flex-1 p-0 text-primary text-center hidden sm:inline-grid place-content-center">
            Price
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {category.map((game: any, idx: number) => (
          <RowView game={game} key={idx} released={released} />
        ))}
      </TableBody>
    </Table>
  );
};

export default TableView;
