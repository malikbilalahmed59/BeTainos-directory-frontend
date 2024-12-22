import { prefetchQuery } from "@/app/helper/helper";
import { fetchLandingPagetData, useLandingPage } from "@/app/hooks/useLandingPage";
import { useEffect } from "react";
import { Categories } from "../components/landing-page";
import DirectoryHeroSection from "../components/landing-page/DirectoryHero";
import Loader from "../components/Loader";
import Meta from "../components/Meta";
import Layout from "../layout";
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
            {
                isLoading ? <Loader /> : <Layout>
                    <DirectoryHeroSection pageData={pageData} />
                    <section className="w-100 float-start">
                        <div className="container py-5">
                            <div className="row justify-content-center">
                                <div className="col-md-10 text-center col-sm-11 ">
                                    <h1 className="text-danger">
                                        BeTaïnos :
                                    </h1>
                                    <h4 className="text-danger">
                                        Annuaire des entreprises et professionnels afro-caribéens
                                    </h4>
                                    <p className="text-justify" style={{ textAlign: 'justify' }}>
                                        BeTaïnos est une plateforme dédiée à la promotion des entreprises et professionnels des communautés afro-caribéennes. Cet annuaire en ligne facilite la mise en relation entre entrepreneurs, professionnels et clients à la recherche de services ou de produits authentiques et diversifiés. Que vous recherchiez un artisan, un consultant ou une entreprise spécialisée, BeTaïnos vous offre un accès rapide et simplifié à un large réseau d&apos;adresses et d&apos;expertises afro-caribéennes.

                                    </p>
                                    <p style={{ textAlign: 'justify' }}>
                                        En utilisant les services de BeTaïnos, vous contribuez à la promotion de l&apos;entrepreneuriat afro-caribéen tout en renforçant les liens au sein de cette communauté dynamique.

                                    </p>
                                    <p>
                                        Besoin de l&apos;adresse d&apos;un restaurant, ou du numéro de téléphone d&apos;&apos;un salon de coiffure ? Pas de panique, consultez notre annuaire d&apos;entreprises et de professionnels en ligne.BeTainos vous permet de trouver rapidement et gratuitement les coordonnées dont vous avez besoin.Une solution simple, efficace et à portée de clic pour tous vos besoins !
                                    </p>
                                </div>
                            </div>

                        </div>
                    </section>

                    <Categories />

                </Layout>
            }

        </>
    );
}
