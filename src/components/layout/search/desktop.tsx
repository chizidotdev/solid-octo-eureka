import Input from "@ui/input";
import Image from "next/image";
import React from "react";

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function DesktopSearchBar({ value, setValue }: Props) {
  return (
    <div className="relative hidden w-full max-w-xl md:flex ">
      <Image
        src="/images/img_search.svg"
        alt="search"
        width={18}
        height={18}
        className="absolute top-0.5 left-4 translate-y-1/2"
      />

      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        name="searchbar"
        placeholder="Search"
        intent="header"
      />
    </div>
  );
}
