import Input from "@ui/input";
import React from "react";
import Icon from "./icon";

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function DesktopSearchBar({ value, setValue }: Props) {
  return (
    <div className="relative hidden w-full max-w-xl md:flex">
      <Icon />
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        name="searchbar"
        placeholder="Search"
        intent="header"
        autoComplete="off"
      />
    </div>
  );
}
