import Layout, { SettingsLayout } from "@components/layout";
import Text from "@ui/text";
import type { NextPageWithLayout } from "../_app";

const Account: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col gap-10 border-l pl-10 dark:border-black_night">
      <Text intent="h2">Account Settings</Text>
    </div>
  );
};

Account.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SettingsLayout>{page}</SettingsLayout>
    </Layout>
  );
};

export default Account;
