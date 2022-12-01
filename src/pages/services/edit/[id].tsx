import React from "react";
import type { NextPageWithLayout } from "src/pages/_app";

import Layout from "@components/layout";
import ListBox from "@components/list-box";
import Button from "@ui/button";
import Text from "@ui/text";

const roles = [{ name: "user" }, { name: "admin" }];

const EditService: NextPageWithLayout = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-10 dark:text-black_night sm:px-20">
        <Text intent="h1" className="mb-5 dark:text-gray_day">
          Edit Service
        </Text>

        <div className="flex flex-col gap-3">
          Role
          <ListBox data={roles} />
        </div>

        <div className="max-w-xs">
          <Button>Update</Button>
        </div>
      </div>
    </Layout>
  );
};

EditService.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default EditService;
