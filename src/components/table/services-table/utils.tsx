import { createColumnHelper } from "@tanstack/react-table";

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
    header: () => <span>Name</span>,
    cell: (info) => <i>{info.getValue()}</i>,
  }),
  columnHelper.accessor("description", {
    header: () => <span>description</span>,
    cell: (info) => <>{info.getValue()}</>,
  }),
  columnHelper.accessor("updated", {
    header: () => <span>updated</span>,
    cell: (info) => info.renderValue().toDateString(),
  }),
  columnHelper.display({
    id: "action",
    header: () => <>Action</>,
    cell: () => <>edit</>,
  }),
];
