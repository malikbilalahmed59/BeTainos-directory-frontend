import Head from "next/head";
import { AdvertisementBox2, BlogCard } from '../components/sub-page';
import Layout from "../layout";

const Index = () => {
  return (
    <>
      <Head>
        <title>Offers</title>
      </Head>
      <Layout>

        <BlogCard />
        <AdvertisementBox2 />
      </Layout>
    </>
  );
};

export default Index;
