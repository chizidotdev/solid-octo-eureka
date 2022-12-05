import React from "react";

type Props = {
  children: React.ReactNode;
  align?: "left" | "center";
};

export default function TableBody({ children, align = "center" }: Props) {
  return (
    <div
      className={`flex items-center gap-2 py-5 px-5 font-normal capitalize ${
        align === "left" ? "pl-20" : "justify-center"
      }`}
    >
      {children}
    </div>
  );
}
