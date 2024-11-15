import NextSessionProvider from "@/app/provider/SessionProvider";
import TanstackProvider from "@/app/provider/TanstackProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/dashboard.css";
import "@/styles/globals.css";
import "@/styles/landing.css";
import "@/styles/login.css";
import "@/styles/mobile.css";
import ProgressBar from "@badrap/bar-of-progress";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'rsuite/dist/rsuite-no-reset.min.css';
import Router from "next/router";

import { CustomProvider } from 'rsuite';
const progress = new ProgressBar({
  size: 2,
  color: "red",
  className: "bar-of-progress",
  delay: 100,
});
if (typeof window !== "undefined") {
  progress.start();
  progress.finish();
}

Router.events.on("routeChangeStart", () => progress.start());
Router.events.on("routeChangeComplete", () => progress.finish());
Router.events.on("routeChangeError", () => progress.finish());
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
