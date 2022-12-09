import React from 'react'
import type { NextPageWithLayout } from './_app';
import Layout from '@components/layout';


const Dashboard:NextPageWithLayout = () => {
  return (
    <div>Dashboard</div>
  )
}

Dashboard.getLayout = (page) => <Layout>{page}</Layout>;

export default Dashboard