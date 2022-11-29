import { Tab } from "@headlessui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function TabPanel({ children }: Props) {
  return <Tab.Panel>{children}</Tab.Panel>;
}
