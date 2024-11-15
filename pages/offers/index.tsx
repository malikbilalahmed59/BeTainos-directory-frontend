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
import { NO_IMAGE_FOUND } from "@/app/constants/constants";

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
  const { data } = useDirectoryPage();
  const pageData = data && data[0];

  // Dynamic Metadata
  const title = pageData
    ? ` "Be Taïnos Offers - Boost Your Business"}`
    : "Be Taïnos Offers - Discover Digital Solutions";
  const description: any = pageData
    ? ` "Explore professional offers tailored for Afro-Caribbean businesses. Build your brand, attract more customers, and grow your sales."}`
    : "Be Taïnos offers custom digital solutions to help Afro-Caribbean professionals succeed in the online world.";
  const keywords = "Afro-Caribbean business, digital solutions, professional services, website creation, online directory";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={typeof window !== "undefined" ? window.location.href : ""} />
        <meta property="og:image" content={NO_IMAGE_FOUND} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
  );
};

export default Index;
