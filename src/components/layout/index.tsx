import React from "react";
import Header from "./header";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="bg-white_day dark:bg-white_night">
      <Header />
      <div>{children}</div>
    </div>
  );
}
