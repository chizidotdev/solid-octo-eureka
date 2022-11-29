import React from "react";
import Header from "./header";
import Navbar from "./navbar";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col bg-white_day font-inter dark:bg-white_night dark:text-gray_day">
      <Header />
      <main className="container flex flex-grow">
        <Navbar />
        <section className="w-full px-5 py-10 sm:px-10">{children}</section>
      </main>
    </div>
  );
}
