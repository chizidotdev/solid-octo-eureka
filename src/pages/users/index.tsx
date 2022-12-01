import React from "react";
import type { NextPageWithLayout } from "../_app";
import Layout from "@components/layout";

import Text from "@ui/text";
import Tabs from "@components/tabs";
import { UsersTable } from "@components/table";
import { useUser } from "@store/user";

const UsersPage: NextPageWithLayout = () => {
  const { users } = useUser();

  const panels = tabs.map((_, idx) => <UsersTable key={idx} data={users} />);

  return (
    <div className="flex flex-col dark:text-black_night">
      <Text intent="h1" className="dark:text-gray_day">
        Users
      </Text>

      <Tabs tabs={tabs} panels={panels} />
    </div>
  );
};

UsersPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default UsersPage;

const tabs = ["All", "Admins", "Users", "Rhendors"];
