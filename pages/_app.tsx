import "@/styles/globals.css";

import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import "@/styles/login.css";
import "@/styles/landing.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
