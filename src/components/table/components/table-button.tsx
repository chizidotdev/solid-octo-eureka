import Button from "@ui/button";
import Link from "next/link";
import React from "react";
import TableBody from "./table-body";

type Props = {
  children: React.ReactNode;
  href: string;
};

export default function TableButton({ children, href }: Props) {
  return (
    <TableBody>
      <Link href={href}>
        <Button size="small">{children}</Button>
      </Link>
    </TableBody>
  );
}
