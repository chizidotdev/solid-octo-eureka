import { createColumnHelper } from "@tanstack/react-table";
import Button from "@ui/button";
import TableBody from "../table-body";
import TableHead from "../table-head";

export type User = {
  id: number;
  name: string;
  role: "user" | "admin";
  joined: Date;
};

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
    cell: (info) => <TableBody>{info.renderValue().toDateString()}</TableBody>,
  }),
  columnHelper.display({
    id: "action",
    header: () => <TableHead>Action</TableHead>,
    cell: () => (
      <TableBody>
        <Button size="small">Edit</Button>
      </TableBody>
    ),
  }),
];
