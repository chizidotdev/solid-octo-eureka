import React from "react";
import type { Service } from "@store/service";
import { columns } from "./utils";
import PaginatedTable from "../paginated-table";

type Props = {
  data: Service[];
};

export default function ServicesTable({ data }: Props) {
  return (
    <PaginatedTable<Service> columns={columns} data={data} itemsPerPage={5} />
  );
}
