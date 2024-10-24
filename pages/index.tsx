import { useLandingPage } from "@/app/hooks/useLandingPage";
import Head from "next/head";
import { useEffect } from "react";
import { AdvertiseBanner, Categories, Directory, HeroSection } from "./components/landing-page";
import Loader from "./components/Loader";
import Layout from "./layout";

export default function Home() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  const { data, isLoading } = useLandingPage();
  const pageData = data && data[0];
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {
        isLoading ? <Loader /> : <Layout>
          {
            pageData?.Advertisement && <AdvertiseBanner pageData={pageData} />
          }
          <HeroSection pageData={pageData} />
          <Directory />
          <Categories />

        </Layout>
      }

    </>
  );
}
