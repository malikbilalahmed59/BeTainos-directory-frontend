import Head from "next/head";
import MainContactBox from '../components/sub-page/MainContactBox';
import Layout from '../layout';

const Index = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Layout>
        <MainContactBox />
      </Layout>
    </>
  );
};

export default Index;
