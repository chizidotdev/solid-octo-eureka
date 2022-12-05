import Chart from "@components/chart";
import Layout from "@components/layout";
import type { NextPageWithLayout } from "./_app";

const Analytics: NextPageWithLayout = () => {
  return <Chart />;
};

Analytics.getLayout = (page) => <Layout>{page}</Layout>;

export default Analytics;
