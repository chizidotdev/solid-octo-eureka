import type { Service } from "@store/service";
import { createColumnHelper } from "@tanstack/react-table";
import TableBody from "../table-body";
import TableHead from "../table-head";
import TableOptions from "../table-options";

const columnHelper = createColumnHelper<Service>();

export const columns = [
  columnHelper.accessor("id", {
    header: () => "#",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    header: () => <TableHead>Name</TableHead>,
    cell: (info) => <TableBody>{info.getValue()}</TableBody>,
  }),
  columnHelper.accessor("description", {
    header: () => <TableHead>description</TableHead>,
    cell: (info) => <TableBody description>{info.getValue()}</TableBody>,
  }),
  columnHelper.accessor("id", {
    id: "action",
    header: () => <></>,
    cell: (info) => <TableOptions id={info.getValue()} />,
  }),
];
