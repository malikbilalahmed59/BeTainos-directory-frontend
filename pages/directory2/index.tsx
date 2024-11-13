import { prefetchQuery } from "@/app/helper/helper";
import { fetchLandingPagetData, useLandingPage } from "@/app/hooks/useLandingPage";
import Head from "next/head";
import { useEffect } from "react";
import { Categories } from "../components/landing-page";
import DirectoryHeroSection from "../components/landing-page/DirectoryHero";
import Loader from "../components/Loader";
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
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
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
                                    Directory of Afro-Caribbean businesses and professionals
                                </h4>
                                <p className="text-justify" style={{ textAlign: 'justify' }}>
                                    BeTaïnos is a platform dedicated to promoting businesses and professionals from AfroCaribbean communities. This online directory facilitates the connection between
                                    entrepreneurs, professionals and customers looking for authentic and diversified services or
                                    products. Whether you are looking for a craftsman, a consultant or a specialized company,
                                    BeTaïnos offers you quick and simplified access to a large network of Afro-Caribbean
                                    addresses and expertise.

                                </p>
                                <p style={{ textAlign: 'justify' }}>
                                    By using BeTaïnos services, you contribute to the promotion of Afro-Caribbean
                                    entrepreneurship while strengthening ties within this dynamic community.

                                </p>
                                <p>
                                    Need the address of a restaurant, or the phone number of a hair salon?
                                    Don&apos;t panic, check out our online business and professional directory.
                                    <b>BeTainos</b> allows you to quickly and free of charge find the contact details you need.
                                    <b>A simple, effective solution just a click away for all your needs !</b>
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
