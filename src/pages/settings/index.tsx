import type { NextPageWithLayout } from "../_app";
import Layout from "@components/layout";

const Settings: NextPageWithLayout = () => {
  return null;
};

Settings.getLayout = () => <Layout settings>{undefined}</Layout>;

export default Settings;
