import React from "react";
import type { NextPageWithLayout } from "../_app";
import Layout from "@components/layout";

import Text from "@ui/text";
import Tabs from "@components/tabs";
import { UsersTable } from "@components/table";
import { useUser } from "@store/user";

const UsersPage: NextPageWithLayout = () => {
  const { users, adminUsers, userUsers } = useUser();

  const panels = [
    <UsersTable key={1} data={users} />,
    <UsersTable key={1} data={adminUsers} />,
    <UsersTable key={1} data={userUsers} />,
  ];

  return (
    <div className="flex flex-col dark:text-black_night">
      <Text intent="h1" className="dark:text-gray_day">
        Users
      </Text>

      <Tabs tabs={tabs} panels={panels} />
    </div>
  );
};

UsersPage.getLayout = (page) => <Layout>{page}</Layout>;

export default UsersPage;

const tabs = ["All", "Admins", "Users", "Rhendors"];
