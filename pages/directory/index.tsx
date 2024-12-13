import Meta from "../components/Meta";
import { AdvertisementBox2, BlogCard } from '../components/sub-page';
import Layout from "../layout";

const Index = () => {
  const title = "Annuaire en ligne - BeTaïnos";
  const description =
    "Présentations de l’annuaire et des différentes catégories d’entreprises et de professionnels";
  const keywords = "Annuaire, BeTaïnos, France";
  return (
    <>
      <Meta
        title={title}
        description={description}
        keywords={keywords}
      />
      <Layout>
        <BlogCard />
        <AdvertisementBox2 />
      </Layout>
    </>
  );
};

export default Index;
