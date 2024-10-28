import NextSessionProvider from "@/app/provider/SessionProvider";
import TanstackProvider from "@/app/provider/TanstackProvider";
import "@/styles/dashboard.css";
import "@/styles/globals.css";
import "@/styles/landing.css";
import "@/styles/login.css";
import "@/styles/mobile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'rsuite/dist/rsuite-no-reset.min.css';

import { CustomProvider } from 'rsuite';

export default function App({ Component, pageProps }: AppProps) {

  return <TanstackProvider dehydratedState={pageProps.dehydratedState}>
    <NextSessionProvider>
      <CustomProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </CustomProvider>

    </NextSessionProvider>

  </TanstackProvider>
}
