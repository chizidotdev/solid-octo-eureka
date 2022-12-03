import React, { useState } from "react";
import type { NextPageWithLayout } from "src/pages/_app";

import Layout from "@components/layout";
import ListBox from "@components/list-box";
import Button from "@ui/button";
import Text from "@ui/text";
import { useService } from "@store/service";
import Input from "@ui/input";

const EditService: NextPageWithLayout = () => {
  const [description, setDescription] = useState("");
  const { services } = useService();

  return (
    <div className="flex flex-col gap-10 dark:text-black_night sm:px-20">
      <Text intent="h1" className="mb-5 dark:text-gray_day">
        Edit Service
      </Text>

      <section className="flex w-60 flex-col gap-5">
        <div className="flex flex-col gap-3">
          Services
          <ListBox data={services} />
        </div>

        <div className="flex flex-col gap-3">
          Description
          <Input
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            intent="form"
          />
        </div>
      </section>

      <div className="max-w-xs">
        <Button>Update</Button>
      </div>
    </div>
  );
};

EditService.getLayout = (page) => <Layout>{page}</Layout>;

export default EditService;
