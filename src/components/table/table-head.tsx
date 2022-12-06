import React from "react";

type Props = {
  children: React.ReactNode;
  name?: boolean;
};

export default function TableHead({ children, name }: Props) {
  return (
    <div
      className={`py-5 px-5 text-center font-normal uppercase text-black_night ${
        name ? "min-w-[300px]" : ""
      }`}
    >
      {children}
    </div>
  );
}
