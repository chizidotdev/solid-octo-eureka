import { Tab } from "@headlessui/react";
import React from "react";
import TabItem from "./tab-item";

type TabProps = {
  tabs: string[];
  panels: React.ReactNode[];
};

export default function Tabs({ tabs, panels }: TabProps) {
  return (
    <Tab.Group>
      <Tab.List className="flex items-center gap-4 overflow-x-auto border-b border-gray_day py-10 text-sm dark:border-gray_night">
        {tabs.map((tab) => (
          <TabItem key={tab}>{tab}</TabItem>
        ))}
      </Tab.List>

      <Tab.Panels className="py-3 text-sm">
        {panels.map((panel, idx) => (
          <Tab.Panel key={idx}>{panel}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
