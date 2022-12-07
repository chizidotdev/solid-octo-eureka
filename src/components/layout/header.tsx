import React from "react";

import { DESLogo, RhendaLogo } from "@components/logo/";
import { DesktopSearchBar, MobileSearchBar } from "./search";

export default function Header() {
  const [value, setValue] = React.useState("");

  return (
    <>
      <header className="sticky top-0 z-20 w-full items-center bg-inherit py-2 px-5 shadow-md dark:shadow-xl">
        <div className="container flex items-center justify-between gap-5 md:gap-20">
          <RhendaLogo />

          <DesktopSearchBar value={value} setValue={setValue} />

          <div className="flex items-center gap-3">
            <MobileSearchBar value={value} setValue={setValue} />
            <DESLogo />
          </div>
        </div>
      </header>
    </>
  );
}
