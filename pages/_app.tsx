import type { AppProps } from "next/app";
import { GlobalStyleReset, Navigation } from "../components";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <Navigation />
      <GlobalStyleReset />
    </>
  );
};

export default MyApp;
