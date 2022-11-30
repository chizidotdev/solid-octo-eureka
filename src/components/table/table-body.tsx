import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function TableBody({ children }: Props) {
  return (
    <div className="py-5 px-5 text-center font-normal capitalize">
      {children}
    </div>
  );
}
