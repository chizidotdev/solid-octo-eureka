import React from "react";
import Header from "./header";
import Navbar from "./navbar";
import { SettingsLayout } from "./settings-layout";

type Props =
  | {
      settings: true;
      children?: React.ReactNode;
    }
  | {
      settings?: boolean;
      children: React.ReactNode;
    };

export default function Layout({ children, settings }: Props) {
  return (
    <div className="flex min-h-screen flex-col bg-white_day font-inter dark:bg-white_night dark:text-gray_day">
      <Header />
      <main className="container flex flex-grow">
        <Navbar />
        <section className="mb-32 w-full px-5 pt-10 sm:px-10 lg:py-[10vh]">
          {settings ? <SettingsLayout>{children}</SettingsLayout> : children}
        </section>
      </main>
    </div>
  );
}
