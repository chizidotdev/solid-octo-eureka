import React from "react";
import Layout from "@components/layout";
import Text from "@ui/text";
import Tabs from "@components/tabs";
import type { Service } from "@components/table";
import { ServicesTable } from "@components/table";

export default function ServicesPage() {
  const panels = tabs.map((_, idx) => (
    <ServicesTable key={idx} data={defaultData} />
  ));

  return (
    <Layout>
      <div className="flex flex-col dark:text-black_night">
        <Text intent="h1" className="dark:text-gray_day">
          Services
        </Text>

        <Tabs tabs={tabs} panels={panels} />
      </div>
    </Layout>
  );
}

const tabs = ["All", "Admins", "Users", "Rhendors"];
const defaultData: Service[] = [
  {
    id: 1,
    name: "web development",
    description: "build website",
    updated: new Date(),
  },
  {
    id: 2,
    name: "marketing",
    description: "generate sales revenue",
    updated: new Date(),
  },
  {
    id: 3,
    name: "ux designer",
    description: "branding and design",
    updated: new Date(),
  },
];
