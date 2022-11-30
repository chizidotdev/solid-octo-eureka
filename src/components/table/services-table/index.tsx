import React from "react";
import Table from "../table";
import type { Service } from "./utils";
import { columns } from "./utils";

type Props = {
  data: Service[];
};

export default function ServicesTable({ data }: Props) {
  return (
    <div>
      <Table<Service> columns={columns} data={data} />
    </div>
  );
}
