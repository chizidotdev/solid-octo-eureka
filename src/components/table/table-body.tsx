import React from "react";

type Props = {
  children: React.ReactNode;
  description?: boolean;
};

export default function TableBody({ children, description }: Props) {
  return (
    <div
      className={`py-5 px-5 font-normal capitalize ${
        description ? "px-10" : "text-center"
      }`}
    >
      {children}
    </div>
  );
}
