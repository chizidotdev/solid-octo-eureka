import React from "react";
import Layout from "@components/layout";
import Text from "@ui/text";
import Tabs from "@components/tabs";
import { ServicesTable } from "@components/table";
import { useService } from "@store/service";

export default function ServicesPage() {
  const { services } = useService();

  const panels = tabs.map((_, idx) => (
    <ServicesTable key={idx} data={services} />
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
