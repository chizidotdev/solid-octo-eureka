import { createColumnHelper } from "@tanstack/react-table";
import Button from "@ui/button";
import TableBody from "../table-body";
import TableHead from "../table-head";

export type Service = {
  id: number;
  name: string;
  description: string;
  updated: Date;
};

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
    cell: (info) => <TableBody>{info.getValue()}</TableBody>,
  }),
  columnHelper.accessor("updated", {
    header: () => <TableHead>updated</TableHead>,
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
