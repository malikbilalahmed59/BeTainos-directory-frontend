import { prefetchQuery } from "@/app/helper/helper";
import { fetchDirectoryPagetData, useDirectoryPage } from "@/app/hooks/useAPIs";
import { Categories } from '../components/landing-page';
import Meta from "../components/Meta";
import BetainosBanner from '../components/sub-page/BetainosBanner';
import BussinessCard from "../components/sub-page/BussinessCard";
import DevelopmentServices from '../components/sub-page/DevelopmentServices';
import HelpSection from '../components/sub-page/HelpSection';
import MainBanner from '../components/sub-page/MainBanner';
import ServicesBox from '../components/sub-page/ServicesBox';
import Testimonials from '../components/sub-page/Testimonials';
import Layout from '../layout';

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
  const title = "OFFERS de service | BeTaïnos";
  const description =
    "Présentation des offres de services proposés par BeTaïnos : Combo Starter, Grenadia Power, Mango Premium, Logo design, Flyer design, Business card design, Application development, Website development, Graphic design, Advertising on our platform.";
  const keywords =
    "BeTaïnos, Offres, services, Combo Starter, Grenadia Power, Mango Premium, Logo design, Flyer design, Business card design, Application development, Website development, Graphic design, Advertising";

  return (
    <>
      <Meta
        title={title}
        description={description}
        keywords={keywords}
      />
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
