import { useDirectoryList } from '@/app/hooks/useAPIs';
import { IComapany } from '@/app/types/landingpage';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Categories } from '../components/landing-page';
import Loader from '../components/Loader';
import Meta from '../components/Meta';
import DirectoryProfile from '../components/sub-page/DirectoryProfile';
import Layout from "../layout";

const Index = () => {
  const { isLoading, data } = useDirectoryList();
  const [pageData, setPageData] = useState<IComapany>();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!isLoading) {
      // Combine both arrays into one for searching
      const combinedData = [...(data?.companie || []), ...(data?.professional || [])];

      // Find a match in the combined data
      const match = combinedData.find(item => item.documentId == id);

      if (match) {
        setPageData(match);
      } else {
        router.push('/404');
      }
    }
  }, [id, isLoading, data, router]);


  if (isLoading) return <Loader />;

  const title = pageData ? `${pageData.Name} - Explore Top Services` : "Explore Top Services";
  const description = pageData
    ? `${pageData.Description || "Learn more about this company and their services."}`
    : "Discover top companies and services tailored to your needs.";

  const keywords = pageData
    ? `${pageData.Name}, services, ${pageData.Category || "business directory"}`
    : "business directory, top companies, services";

  return (
    <>
      <Meta
        title={title}
        description={description}
        keywords={keywords}
      />
      <Layout>
        <DirectoryProfile pageData={pageData} />
        <Categories />
      </Layout>
    </>
  );
};

export default Index;
