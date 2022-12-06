import Layout from "@components/layout";
import { ServicesTable } from "@components/table";
import { Button } from "@components/ui";
import { useService } from "@store/service";
import Text from "@ui/text";
import type { NextPageWithLayout } from "../_app";

const ServicesPage: NextPageWithLayout = () => {
  const { services } = useService();

  return (
    <div className="flex flex-col gap-10 dark:text-black_night">
      <Text intent="h1" className="dark:text-gray_day">
        Services
      </Text>

      {/* <Tabs tabs={tabs} panels={panels} /> */}
      <section className="flex flex-col gap-2">
        <div className="w-36 self-end text-sm">
          <Button variant="rounded">Create</Button>
        </div>

        <ServicesTable data={services} />
      </section>
    </div>
  );
};

ServicesPage.getLayout = (page) => <Layout>{page}</Layout>;

export default ServicesPage;
