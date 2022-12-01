import Layout, { SettingsLayout } from "@components/layout";
import Text from "@ui/text";
import type { NextPageWithLayout } from "../_app";

const App: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col gap-10 border-l pl-10 dark:border-black_night">
      <Text intent="h2">App Settings</Text>
    </div>
  );
};

App.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SettingsLayout>{page}</SettingsLayout>
    </Layout>
  );
};

export default App;
