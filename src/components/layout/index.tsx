import React from "react";
import Header from "./header";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main>
      <Header />
      <div>{children}</div>
    </main>
  );
}
