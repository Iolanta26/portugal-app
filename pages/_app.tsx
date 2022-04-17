import { GlobalStyleReset } from "../components/styles/GlobalStyleReset";
import type { AppProps } from "next/app";

import { Navigation } from "../components/Navigation";
import { Fragment } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Component {...pageProps} />
      <GlobalStyleReset />
      <Navigation />
    </Fragment>
  );
};

export default MyApp;
