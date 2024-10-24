import Head from "next/head";
import { AdvertisementBox2, BlogCard, EmployeeForm } from '../components/sub-page';
import Layout from "../layout";

const Index = () => {
  return (
    <>
      <Head>
        <title>Offers</title>
      </Head>
      <Layout>
        <EmployeeForm />
        <BlogCard />
        <AdvertisementBox2 />
        <BlogCard />
      </Layout>
    </>
  );
};

export default Index;
