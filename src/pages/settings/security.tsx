import Layout from "@components/layout";
import Text from "@ui/text";
import type { NextPageWithLayout } from "../_app";

const Security: NextPageWithLayout = () => {
  return (
    <>
      <Text intent="h2">Security</Text>
    </>
  );
};

Security.getLayout = function getLayout(page) {
  return <Layout settings>{page}</Layout>;
};

export default Security;
