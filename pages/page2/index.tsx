import { useLandingPage } from "@/app/hooks/useLandingPage";
import Head from "next/head";
import { Categories, Footer, Header } from '../components/landing-page';
import { AdvertisementBox, Banner, ProfessionalBox } from '../components/sub-page';

const Index = () => {
  const { data } = useLandingPage();
  const pageData = data && data[0];
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header pageData={pageData} />
      <Banner />
      <AdvertisementBox />
      <ProfessionalBox />
      <Categories />
      <Footer pageData={pageData} />
    </>
  );
};

export default Index;
