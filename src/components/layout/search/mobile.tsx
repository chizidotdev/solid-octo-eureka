import { Popover } from "@headlessui/react";
import { Input } from "@components/ui";
import React from "react";
import Icon from "./icon";
import { BsSearch } from "react-icons/bs";

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function MobileSearchBar({ setValue, value }: Props) {
  return (
    <Popover className="relative md:hidden">
      <Popover.Button>
        <BsSearch className="text-gray_night dark:text-gray_day" />
      </Popover.Button>

      <Popover.Panel className="absolute top-10 -right-10 z-10 w-64 rounded-full bg-white_day shadow-md dark:bg-white_night">
        <div className="relative w-full max-w-xl">
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
      </Popover.Panel>
    </Popover>
  );
}
