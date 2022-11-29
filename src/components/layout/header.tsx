import React from "react";

import { DESLogo, RhendaLogo } from "@components/logo/";
import { DesktopSearchBar, MobileSearchBar } from "./search";

export default function Header() {
  const [value, setValue] = React.useState("");

  return (
    <>
      <>
        <header className="w-full items-center bg-white_day py-2 px-5 shadow-md">
          <div className="flex items-center justify-between gap-20">
            <RhendaLogo />

            <DesktopSearchBar value={value} setValue={setValue} />

            <div className="flex items-center gap-3">
              <MobileSearchBar value={value} setValue={setValue} />
              <DESLogo />
            </div>
          </div>
        </header>
      </>
    </>
  );
}