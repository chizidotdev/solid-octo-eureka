import Layout, { SettingsLayout } from "@components/layout";
import Text from "@ui/text";
import type { NextPageWithLayout } from "../_app";

const App: NextPageWithLayout = () => {
  return (
    <>
      <Text intent="h2">App Settings</Text>
    </>
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
