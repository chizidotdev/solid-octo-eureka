import { Tab } from "@headlessui/react";
import React from "react";
import TabItem from "./tab-item";

type TabProps = {
  tabs: string[];
};

export default function Tabs({ tabs }: TabProps) {
  return (
    <Tab.Group>
      <Tab.List className="flex items-center gap-4 overflow-x-auto border-b border-gray_day py-10 dark:border-gray_night">
        {tabs.map((tab) => (
          <TabItem key={tab}>{tab}</TabItem>
        ))}
      </Tab.List>

      <Tab.Panels className="py-5">
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
        <Tab.Panel>Content 4</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
