import { GlobalStyleReset } from "../components/styles/GlobalStyleReset";
import type { AppProps } from "next/app";

import { useState } from "react";

import { Place, RegionVisual } from "../types";
import { Navigation } from "../components/Navigation";
import { AppContext } from "../components/store";

const place: Place = {
  placeName: "",
  placeImage: "",
  id: "",
  location: "",
  region: "",
  placeDesc: "",
  otherImages: [],
};

const regionVisual: RegionVisual = "alentejo";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [selectedFavouritePlace, setSelectedFavouritePlace] =
    useState<Place>(place);
  const [regionVisualColor, setRegionVisualColor] =
    useState<RegionVisual>(regionVisual);
  const [selectedPlaces, setSelectedPlaces] = useState<Place[]>([]);

  // const listOfFavouritesHandler = (selectedPlaces) => {
  //   setSelectedPlaces((prevState) => [...prevState, { selectedPlaces }]);
  // };

  return (
    <AppContext.Provider
      value={{
        selectedFavouritePlace,
        setSelectedFavouritePlace,
        regionVisualColor,
        setRegionVisualColor,
        selectedPlaces,
        setSelectedPlaces,
      }}
    >
      <Component {...pageProps} />
      <Navigation />
      <GlobalStyleReset />
    </AppContext.Provider>
  );
};

export default MyApp;
