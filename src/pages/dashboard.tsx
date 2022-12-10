import React from "react";
import type { NextPageWithLayout } from "./_app";
import Layout from "@components/layout";
import { AnalyticsCard, UserRegistration } from "@module/analytics";
import type { AnalyticsCardProps } from "@module/analytics";
import { FiUsers, AiOutlineShopping, FaUsers } from "@icons";

const Dashboard: NextPageWithLayout = () => {
  return (
    <div className="grid w-3/4 gap-10">
      <div className="flex gap-6">
        {summaryData.map((summary) => (
          <AnalyticsCard {...summary} key={summary.title} />
        ))}
      </div>

      <UserRegistration />
    </div>
  );
};

Dashboard.getLayout = (page) => <Layout>{page}</Layout>;

export default Dashboard;

const summaryData: AnalyticsCardProps[] = [
  {
    title: "Users",
    percentage: 2.51,
    value: 13675,
    icon: <FiUsers />,
  },
  {
    title: "Rhendors",
    percentage: -1.43,
    value: 1986,
    icon: <AiOutlineShopping />,
  },
  {
    title: "Rhendors",
    percentage: -1.43,
    value: 1986,
    icon: <FaUsers />,
  },
];
