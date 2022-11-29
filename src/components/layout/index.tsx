import React from "react";
import Header from "./header";
import Navbar from "./navbar";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col bg-white_day font-inter dark:bg-white_night dark:text-white_day">
      <Header />
      <main className="flex flex-grow">
        <Navbar />
        <section className="p-5">{children}</section>
      </main>
    </div>
  );
}
