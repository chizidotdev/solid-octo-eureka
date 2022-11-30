import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function TableHead({ children }: Props) {
  return (
    <div className="py-5 px-5 text-center font-normal uppercase text-black_night">
      {children}
    </div>
  );
}
