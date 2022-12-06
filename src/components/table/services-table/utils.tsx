import type { Service } from "@store/service";
import { createColumnHelper } from "@tanstack/react-table";
import Image from "next/image";
import TableBody from "../table-body";
import TableHead from "../table-head";
import TableOptions from "../table-options";

const columnHelper = createColumnHelper<Service>();

export const columns = [
  columnHelper.accessor("id", {
    header: () => <TableHead>#</TableHead>,
    cell: (info) => <TableBody>{info.getValue()}</TableBody>,
  }),
  columnHelper.accessor("name", {
    header: () => <TableHead size="md">Name</TableHead>,
    cell: (info) => (
      <TableBody align="left">
        <Image src="/images/img_user1.png" alt="" width={40} height={40} />
        {info.getValue()}
      </TableBody>
    ),
  }),
  columnHelper.accessor("description", {
    header: () => <TableHead size="lg">description</TableHead>,
    cell: (info) => <TableBody align="left">{info.getValue()}</TableBody>,
  }),
  columnHelper.accessor("id", {
    id: "action",
    header: () => <TableHead index />,
    cell: (info) => <TableOptions id={info.getValue()} />,
  }),
];
