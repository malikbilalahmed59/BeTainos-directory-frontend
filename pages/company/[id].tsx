import { useDirectoryList } from '@/app/hooks/useAPIs';
import { IComapany } from '@/app/types/landingpage';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Categories } from '../components/landing-page';
import Loader from '../components/Loader';
import DirectoryProfile from '../components/sub-page/DirectoryProfile';
import Layout from "../layout";
import Head from 'next/head';
import { NO_IMAGE_FOUND } from '@/app/constants/constants';

const Index = () => {
  const { isLoading, data } = useDirectoryList();
  const [pageData, setPageData] = useState<IComapany>();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!isLoading) {
      const match = data?.companie.find(item => item.documentId == id);
      if (match) {
        setPageData(match);
      } else {
        router.push('/404');
      }
    }
  }, [id, isLoading, data, router]);

  if (isLoading) return <Loader />;

  const title = pageData ? `${pageData.Name} - Explore Top Services` : "Loading...";
  const description = pageData
    ? `${pageData.Description || "Learn more about this company and their services."}`
    : "Discover top companies and services tailored to your needs.";

  const keywords = pageData
    ? `${pageData.Name}, services, ${pageData.categories_list.Name || "business directory"}`
    : "business directory, top companies, services";

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
        <meta property="og:image" content={pageData?.Logo.previewUrl || NO_IMAGE_FOUND} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <DirectoryProfile pageData={pageData} />
        <Categories />
      </Layout>
    </>
  );
};

export default Index;
