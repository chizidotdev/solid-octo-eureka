import React from "react";
import type { NextPageWithLayout } from "./_app";
import Layout from "@components/layout";
import { FiUsers, AiOutlineShopping, FaUsers } from "@icons";
import {
  AnalyticsCard,
  Navigation,
  SessionsPerDay,
  UniqueVisitors,
  UserByDevice,
  UserRegistration,
  UsersByGender,
} from "@module/analytics";
import type { AnalyticsCardProps } from "@module/analytics";
import { Text } from "@components/ui";

const Dashboard: NextPageWithLayout = () => {
  return (
    <div className="grid gap-32">
      <section className="grid grid-cols-[3fr_1fr] gap-20">
        <div>
          <div className="flex gap-6">
            {summaryData.map((summary) => (
              <AnalyticsCard {...summary} key={summary.title} />
            ))}
          </div>

          <div className="mt-14 flex w-2/3 flex-col gap-3">
            <Text intent="h3">User Registration</Text>

            <UserRegistration />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-20">
        <div>
          <UniqueVisitors />
        </div>

        <div>
          <SessionsPerDay />
        </div>
      </section>

      <section className="grid grid-cols-3 gap-20">
        <div>
          <UsersByGender />
        </div>

        <div>
          <Navigation />
        </div>

        <div>
          <UserByDevice />
        </div>
      </section>
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
    title: "Admin",
    percentage: -3.56,
    value: 5,
    icon: <FaUsers />,
  },
];
