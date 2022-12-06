import React from "react";
import Table from "../table";
import type { Service } from "@store/service";
import { columns } from "./utils";

type Props = {
  data: Service[];
};

export default function ServicesTable({ data }: Props) {
  return <Table<Service> columns={columns} data={data} />;
}
