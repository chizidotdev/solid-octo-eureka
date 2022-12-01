import Layout from "@components/layout";
import React from "react";
import type { NextPageWithLayout } from "./_app";

const NotFound: NextPageWithLayout = () => {
  return (
    <>
      <h1>Oops! Page not found</h1>
    </>
  );
};

NotFound.getLayout = (page) => <Layout>{page}</Layout>;

export default NotFound;
