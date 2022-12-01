import type { NextPageWithLayout } from "../_app";
import Layout from "@components/layout";

const Settings: NextPageWithLayout = () => {
  return <></>;
};

Settings.getLayout = (page) => <Layout settings>{page}</Layout>;

export default Settings;
