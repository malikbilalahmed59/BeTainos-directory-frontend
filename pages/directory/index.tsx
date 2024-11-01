import Head from "next/head";
import { Categories } from '../components/landing-page';
import BetainosBanner from '../components/sub-page/BetainosBanner';
import DevelopmentServices from '../components/sub-page/DevelopmentServices';
import HelpSection from '../components/sub-page/HelpSection';
import MainBanner from '../components/sub-page/MainBanner';
import ServicesBox from '../components/sub-page/ServicesBox';
import Testimonials from '../components/sub-page/Testimonials';
import Layout from '../layout';
import { fetchDirectoryPagetData, useDirectoryPage } from "@/app/hooks/useAPIs";
import { prefetchQuery } from "@/app/helper/helper";
import BussinessCard from "../components/sub-page/BussinessCard";

export async function getServerSideProps() {
  const { dehydratedState } = await prefetchQuery({
    queryKey: 'directory-page',
    queryFn: fetchDirectoryPagetData,
  });
  return {
    props: {
      dehydratedState: dehydratedState,
    },
  };
}
const Index = () => {
  const { data } = useDirectoryPage()
  const pageData = data && data[0]
  return (
    <>
      <Head>
        <title>Directory</title>
      </Head>
      <Layout>
        <MainBanner pageData={pageData} />
        <BussinessCard pageData={pageData} />
        <Categories />
        <ServicesBox pageData={pageData} />
        <BetainosBanner pageData={pageData} />
        <DevelopmentServices pageData={pageData} />
        <HelpSection pageData={pageData} />
        <Testimonials pageData={pageData} />
      </Layout>
    </>
  )
}

export default Index