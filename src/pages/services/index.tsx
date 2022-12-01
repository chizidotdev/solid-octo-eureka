import React from "react";
import Layout from "@components/layout";
import Text from "@ui/text";
import Tabs from "@components/tabs";
import { ServicesTable } from "@components/table";
import { useService } from "@store/service";
import type { NextPageWithLayout } from "../_app";

const ServicesPage: NextPageWithLayout = () => {
  const { services } = useService();

  const panels = tabs.map((_, idx) => (
    <ServicesTable key={idx} data={services} />
  ));

  return (
    <div className="flex flex-col dark:text-black_night">
      <Text intent="h1" className="dark:text-gray_day">
        Services
      </Text>

      <Tabs tabs={tabs} panels={panels} />
    </div>
  );
};

ServicesPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ServicesPage;

const tabs = ["All", "Admins", "Users", "Rhendors"];
