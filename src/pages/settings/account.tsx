import Layout from "@components/layout";
import Text from "@ui/text";
import type { NextPageWithLayout } from "../_app";

const Account: NextPageWithLayout = () => {
  return (
    <>
      <Text intent="h2">Account Settings</Text>
    </>
  );
};

Account.getLayout = function getLayout(page) {
  return <Layout settings>{page}</Layout>;
};

export default Account;
