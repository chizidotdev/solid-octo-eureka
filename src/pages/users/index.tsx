import React from "react";

import Layout from "@components/layout";
import Text from "@ui/text";
import Tabs from "@components/tabs";

const UsersPage = () => {
  return (
    <Layout>
      <div className="flex flex-col">
        <Text intent="h1">Users</Text>

        <Tabs tabs={tabs} />
      </div>
    </Layout>
  );
};

export default UsersPage;

const tabs = ["All", "Admins", "Users", "Rhendors"];
