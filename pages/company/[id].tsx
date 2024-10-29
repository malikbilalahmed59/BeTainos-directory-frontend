import { useDirectoryList } from '@/app/hooks/useAPIs';
import { IComapany } from '@/app/types/landingpage';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Categories } from '../components/landing-page';
import Loader from '../components/Loader';
import DirectoryProfile from '../components/sub-page/DirectoryProfile';
import Layout from "../layout";

const Index = () => {
  const { isLoading, data } = useDirectoryList();
  const [pageData, setPageData] = useState<IComapany>()
  const router = useRouter();
  const { id } = router.query;
  console.log(id)

  useEffect(() => {
    const match = data?.companie.find(item => item.documentId == id);
    console.log(match)
    if (match) {
      setPageData(match)
    } else {
      router.push('/404')
    }
  }, [id, isLoading, data, router])

  if (isLoading) return <Loader />


  return (
    <Layout>
      <DirectoryProfile pageData={pageData} />

      <Categories />
    </Layout>
  );
};

export default Index;
