import React from "react";
import Layout from "@components/layout";
import Text from "@ui/text";
import Tabs from "@components/tabs";
import { UsersTable } from "@components/table";

const UsersPage = () => {
  const panels = tabs.map((_, idx) => (
    <UsersTable key={idx} data={defaultData} />
  ));

  return (
    <Layout>
      <div className="flex flex-col dark:text-black_night">
        <Text intent="h1" className="dark:text-gray_day">
          Users
        </Text>

        <Tabs tabs={tabs} panels={panels} />
      </div>
    </Layout>
  );
};

export default UsersPage;

const tabs = ["All", "Admins", "Users", "Rhendors"];
const defaultData = [
  {
    id: 1,
    name: "tanner linsley the dev",
    role: "user" as const,
    joined: new Date(),
  },
  {
    id: 2,
    name: "tandy miller",
    role: "admin" as const,
    joined: new Date(),
  },
  {
    id: 3,
    name: "joe dirte",
    role: "user" as const,
    joined: new Date(),
  },
  {
    id: 4,
    name: "joe dirte",
    role: "user" as const,
    joined: new Date(),
  },
  {
    id: 5,
    name: "joe dirte",
    role: "user" as const,
    joined: new Date(),
  },
  {
    id: 6,
    name: "joe dirte",
    role: "user" as const,
    joined: new Date(),
  },
  {
    id: 7,
    name: "tanner linsley the dev",
    role: "user" as const,
    joined: new Date(),
  },
  {
    id: 8,
    name: "tandy miller",
    role: "admin" as const,
    joined: new Date(),
  },
  {
    id: 9,
    name: "joe dirte",
    role: "user" as const,
    joined: new Date(),
  },
];
