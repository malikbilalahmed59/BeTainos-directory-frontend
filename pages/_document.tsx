
import NextSessionProvider from "@/app/provider/SessionProvider";
import TanstackProvider from "@/app/provider/TanstackProvider";
import { Html, Head, Main, NextScript } from "next/document";
import { ToastContainer } from "react-toastify";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
      </Head>
      <body>
        <NextSessionProvider>
          <TanstackProvider>
            <Main />
            <ToastContainer />
          </TanstackProvider>
        </NextSessionProvider>
        <NextScript />
      </body>
    </Html>
  );
}
