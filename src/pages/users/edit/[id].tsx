import React, { useState } from "react";
import type { NextPageWithLayout } from "src/pages/_app";

import Layout from "@components/layout";
import ListBox from "@components/list-box";
import { useRouter } from "next/router";
import { Button, Input, Text } from "@components/ui";

const roles = [{ name: "user" }, { name: "admin" }];

const EditUser: NextPageWithLayout = () => {
  const [, setImage] = useState<FileList | null>(null);
  const { push } = useRouter();

  const handleUpdate = () => {
    push("/users");
  };

  return (
    <div className="flex flex-col gap-10 dark:text-black_night sm:px-20">
      <Text intent="h1" className="mb-5 dark:text-gray_day">
        Edit User
      </Text>

      <section className="flex w-60 flex-col gap-5">
        <div className="flex flex-col gap-1">
          Image
          <Input
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files)}
          />
        </div>
        <div className="flex flex-col gap-1">
          Role
          <ListBox data={roles} />
        </div>
      </section>

      <div className="max-w-xs">
        <Button onClick={handleUpdate}>Update</Button>
      </div>
    </div>
  );
};

EditUser.getLayout = (page) => <Layout>{page}</Layout>;

export default EditUser;
