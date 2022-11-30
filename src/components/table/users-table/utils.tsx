import { createColumnHelper } from "@tanstack/react-table";
import TableBody from "../table-body";
import TableButton from "../table-button";
import TableHead from "../table-head";
import type { User } from "@store/user";

const columnHelper = createColumnHelper<User>();

export const columns = [
  columnHelper.accessor("id", {
    header: () => <>#</>,
    cell: (info) => <>{info.getValue()}</>,
  }),
  columnHelper.accessor("name", {
    header: () => <TableHead>Name</TableHead>,
    cell: (info) => <TableBody>{info.getValue()}</TableBody>,
  }),
  columnHelper.accessor("role", {
    header: () => <TableHead>Role</TableHead>,
    cell: (info) => <TableBody>{info.getValue()}</TableBody>,
  }),
  columnHelper.accessor("joined", {
    header: () => <TableHead>Joined</TableHead>,
    cell: (info) => <TableBody>{info.getValue().toDateString()}</TableBody>,
  }),
  columnHelper.accessor("id", {
    id: "action",
    header: () => <TableHead>Action</TableHead>,
    cell: (info) => (
      <TableButton href={`users/edit/${info.getValue()}`}>Edit</TableButton>
    ),
  }),
];
