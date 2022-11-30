import React from "react";
import Table from "../table";
import type { User } from "./utils";
import { columns } from "./utils";

type Props = {
  data: User[];
};

export default function UsersTable({ data }: Props) {
  return (
    <div>
      <Table<User> data={data} columns={columns} />
    </div>
  );
}
