import { Tab } from "@headlessui/react";
import { cva } from "class-variance-authority";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const tabStyles = cva("py-2 px-6 rounded-full font-medium border", {
  variants: {
    status: {
      active: [
        "bg-brand-secondary_day",
        "border-brand-secondary_day",
        "text-white_day",
      ],
      inactive: [
        "border-gray_day dark:border-gray_night",
        "dark:text-black_night",
      ],
    },
  },
  defaultVariants: {
    status: "inactive",
  },
});

export default function TabItem({ children }: Props) {
  return (
    <Tab className="focus-visible:outline-none">
      {({ selected }) => (
        <span
          className={tabStyles({ status: selected ? "active" : undefined })}
        >
          {children}
        </span>
      )}
    </Tab>
  );
}
