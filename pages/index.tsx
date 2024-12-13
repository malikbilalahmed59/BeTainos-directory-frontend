import { prefetchQuery } from "@/app/helper/helper";
import { fetchLandingPagetData, useLandingPage } from "@/app/hooks/useLandingPage";
import { useEffect } from "react";
import { AdvertiseBanner, Categories, Directory, HeroSection } from "./components/landing-page";
import Loader from "./components/Loader";
import Meta from "./components/Meta";
import Layout from "./layout";
export async function getServerSideProps() {
  const { dehydratedState } = await prefetchQuery({
    queryKey: 'landing-page',
    queryFn: fetchLandingPagetData,
  });
  return {
    props: {
      dehydratedState: dehydratedState,
    },
  };
}
export default function Home() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  const { data, isLoading } = useLandingPage();
  const pageData = data && data[0];
  const title = "HOME BeTaïnos | Annuaire des entreprises | 100% afro caribéen";
  const description = "Page d’accueil";
  const keywords = "Annuaire, BeTaïnos, Professionnel, Afro-caribéen";
  return (
    <>
      <Meta
        title={title}
        description={description}
        keywords={keywords}
      />
      {
        isLoading ? <Loader /> : <Layout>
          <AdvertiseBanner pageData={pageData} />
          <HeroSection pageData={pageData} />
          <Directory />
          <Categories />

        </Layout>
      }

    </>
  );
}
