import Layout, { SettingsLayout } from "@components/layout";
import Text from "@ui/text";
import type { NextPageWithLayout } from "../_app";

const Security: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col gap-10 border-l pl-10 dark:border-black_night">
      <Text intent="h2">Security</Text>
    </div>
  );
};

Security.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SettingsLayout>{page}</SettingsLayout>
    </Layout>
  );
};

export default Security;
