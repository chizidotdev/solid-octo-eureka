import Layout from "@components/layout";
import ListBox from "@components/list-box";
import Button from "@ui/button";
import Text from "@ui/text";
import React from "react";

export default function EditUser() {
  return (
    <Layout>
      <div className="flex flex-col gap-10 dark:text-black_night sm:px-20">
        <Text intent="h1" className="mb-5 dark:text-gray_day">
          Edit User
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
}

const roles = [{ name: "user" }, { name: "admin" }];
