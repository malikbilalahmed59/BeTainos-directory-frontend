import Head from "next/head";
import { AdvertisementBox2, BlogCard } from '../components/sub-page';
import Layout from "../layout";
import { NO_IMAGE_FOUND } from "@/app/constants/constants";

const Index = () => {
  const pageTitle = "Discover Exclusive Offers for Afro-Caribbean Professionals - Be Taïnos";
  const pageDescription = "Explore Be Taïnos' curated offers for Afro-Caribbean businesses. Boost your visibility, attract more customers, and grow your brand with tailored digital solutions.";
  const keywords = "Afro-Caribbean businesses, exclusive offers, professional services, online directory, Be Taïnos, local businesses";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={typeof window !== "undefined" ? window.location.href : ""} />
        <meta property="og:image" content={NO_IMAGE_FOUND} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <BlogCard />
        <AdvertisementBox2 />
      </Layout>
    </>
  );
};

export default Index;
