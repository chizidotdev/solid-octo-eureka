import Layout from "@components/layout";
import Text from "@ui/text";
import type { NextPageWithLayout } from "../_app";

const Configurations: NextPageWithLayout = () => {
  return (
    <>
      <Text intent="h2">Configurations</Text>
    </>
  );
};

Configurations.getLayout = function getLayout(page) {
  return <Layout settings>{page}</Layout>;
};

export default Configurations;
