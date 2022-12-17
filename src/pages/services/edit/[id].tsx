import React, { useState } from "react";
import type { NextPageWithLayout } from "src/pages/_app";
import { useRouter } from "next/router";

import Layout from "@components/layout";
import ListBox from "@components/list-box";
import { useService } from "@store/service";
import { Button, Text, Input, Textarea } from "@components/ui";

const EditService: NextPageWithLayout = () => {
  const [description, setDescription] = useState("");
  const [, setImage] = useState<FileList | null>(null);
  const { services } = useService();
  const { push } = useRouter();

  const handleUpdate = () => {
    push("/services");
  };

  return (
    <div className="flex flex-col gap-10 dark:text-black_night sm:px-20">
      <Text intent="h1" className="mb-5 dark:text-gray_day">
        Edit Service
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
          Services
          <ListBox data={services} />
        </div>

        <div className="flex flex-col gap-1">
          Description
          <Textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            intent="form"
          />
        </div>
      </section>

      <div className="max-w-xs">
        <Button onClick={handleUpdate}>Update</Button>
      </div>
    </div>
  );
};

EditService.getLayout = (page) => <Layout>{page}</Layout>;

export default EditService;
