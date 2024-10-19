
import NextSessionProvider from "@/app/provider/SessionProvider";
import TanstackProvider from "@/app/provider/TanstackProvider";
import { Html, Head, Main, NextScript } from "next/document";
import { ToastContainer } from "react-toastify";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
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
