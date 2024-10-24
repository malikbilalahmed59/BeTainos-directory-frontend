import Head from "next/head";
import { Categories } from '../components/landing-page';
import BetainosBanner from '../components/sub-page/BetainosBanner';
import DevelopmentServices from '../components/sub-page/DevelopmentServices';
import HelpSection from '../components/sub-page/HelpSection';
import MainBanner from '../components/sub-page/MainBanner';
import ServicesBox from '../components/sub-page/ServicesBox';
import Testimonials from '../components/sub-page/Testimonials';
import Layout from '../layout';


const Index = () => {
  return (
    <>
      <Head>
        <title>Directory</title>
      </Head>
      <Layout>
        <MainBanner />
        <DevelopmentServices />
        <ServicesBox />
        <BetainosBanner />
        <Categories />
        <HelpSection />
        <Testimonials />
      </Layout>
    </>
  )
}

export default Index