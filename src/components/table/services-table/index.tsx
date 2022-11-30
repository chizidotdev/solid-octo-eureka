import React from "react";
import Table from "../table";
import type { Service } from "./utils";
import { columns } from "./utils";

export default function ServicesTable() {
  return (
    <div>
      <Table<Service> columns={columns} data={defaultData} />
    </div>
  );
}

const defaultData: Service[] = [
  {
    id: 1,
    name: "web development",
    description: "build website",
    updated: new Date(),
  },
  {
    id: 2,
    name: "marketing",
    description: "generate sales revenue",
    updated: new Date(),
  },
  {
    id: 3,
    name: "ux designer",
    description: "branding and design",
    updated: new Date(),
  },
];
