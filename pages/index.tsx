import Head from "next/head";
import { useEffect } from "react";
import { AdditionBox, Header, Footer, AdvertiseBanner, Categories, Contact } from "./components/landing-page";
import { useLandingPage } from "@/app/hooks/useLandingPage";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  const { data, isLoading } = useLandingPage();
  const pageData = data && data[0];
  console.log(data)
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      {
        isLoading ? <>
          <p>Loading...</p>
        </> : <>

          <Header pageData={pageData} />
          <AdvertiseBanner />
          <Contact />
          <AdditionBox />
          <Categories />
          <Footer /></>
      }

    </>
  );
}
