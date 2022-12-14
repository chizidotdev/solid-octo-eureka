import React from "react";
import type { NextPageWithLayout } from "./_app";
import Layout from "@components/layout";
import { FiUsers, AiOutlineShopping, FaUsers } from "@icons";
import {
  AnalyticsCard,
  Navigation,
  SessionsPerDay,
  Summary,
  UniqueVisitors,
  UserByDevice,
  UserRegistration,
  UsersByGender,
} from "@module/analytics";
import type { AnalyticsCardProps } from "@module/analytics";
import { Text } from "@components/ui";

const Dashboard: NextPageWithLayout = () => {
  return (
    <div className="grid gap-20 lg:gap-32">
      <section className="grid gap-10 lg:gap-20 xl:grid-cols-[3fr_1fr]">
        <div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {summaryData.map((summary) => (
              <AnalyticsCard {...summary} key={summary.title} />
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-3 xl:w-2/3">
            <Text intent="h3">User Registration</Text>

            <UserRegistration />
          </div>
        </div>

        <aside>
          <Summary />
        </aside>
      </section>

      <section className="grid gap-20 xl:grid-cols-2">
        <div className="flex flex-col gap-5">
          <Text intent="h3">Unique Visitors</Text>
          <UniqueVisitors />
        </div>

        <div className="flex flex-col gap-5">
          <Text intent="h3">Sessions Per Day</Text>
          <SessionsPerDay />
        </div>
      </section>

      <section className="grid gap-10 lg:gap-20 xl:grid-cols-3">
        <div className="flex flex-col gap-5 rounded-md px-10 py-5 shadow-md">
          <Text intent="h3">Users By Gender</Text>
          <UsersByGender />
        </div>

        <div className="flex flex-col gap-5 rounded-md px-10 py-5 shadow-md">
          <Text intent="h3">Navigation</Text>
          <Navigation />
        </div>

        <div className="flex flex-col gap-5 rounded-md px-10 py-5 shadow-md">
          <Text intent="h3">Users By Device</Text>
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
