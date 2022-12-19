import { createColumnHelper } from "@tanstack/react-table";
import TableBody from "../components/table-body";
import TableButton from "../components/table-button";
import TableHead from "../components/table-head";
import type { User } from "@store/user";
import Image from "next/image";

const columnHelper = createColumnHelper<User>();

export const columns = [
  columnHelper.accessor("id", {
    header: () => <TableHead>#</TableHead>,
    cell: (info) => <TableBody>{info.row.index + 1}</TableBody>,
  }),
  columnHelper.accessor("name", {
    header: () => <TableHead>Name</TableHead>,
    cell: (info) => (
      <TableBody align="left">
        <Image src="/images/img_user1.png" alt="" width={40} height={40} />
        {info.getValue()}
      </TableBody>
    ),
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
