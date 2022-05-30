import { GlobalStyleReset } from "../components/styles/GlobalStyleReset";
import type { AppProps } from "next/app";

import { Fragment, useState } from "react";

import { AppContext } from "../components/store/appContext";
import { Place } from "../types";
import { Navigation } from "../components/Navigation";

const place: Place = {
  placeName: "",
  placeImage: "",
  id: "",
  location: "",
  region: "",
  placeDesc: "",
  otherImages: [],
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [selectedFavouritePlace, setSelectedFavouritePlace] =
    useState<Place>(place);

  return (
    <AppContext.Provider
      value={{ selectedFavouritePlace, setSelectedFavouritePlace }}
    >
      <Component {...pageProps} />
      <Navigation />
      <GlobalStyleReset />
    </AppContext.Provider>
  );
};

export default MyApp;
