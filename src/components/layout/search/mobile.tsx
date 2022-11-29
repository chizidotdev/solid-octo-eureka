import { Popover } from "@headlessui/react";
import { Input, Text } from "@components/ui";
import Image from "next/image";
import React from "react";

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function MobileSearchBar({ setValue, value }: Props) {
  return (
    <Popover className="relative md:hidden">
      <Popover.Button>
        <Text>Search</Text>
      </Popover.Button>

      <Popover.Panel className="absolute top-8 -right-10 z-10 w-64 rounded-full bg-white_day shadow-md">
        <div className="relative w-full max-w-xl">
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
      </Popover.Panel>
    </Popover>
  );
}
