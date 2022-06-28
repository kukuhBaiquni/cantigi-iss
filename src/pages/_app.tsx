import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <Head>
      <meta content="initial-scale=1.0, width=device-width" name="viewport" />
    </Head>
    <Component {...pageProps} />
  </Fragment>
);

export default MyApp;
