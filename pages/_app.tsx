import { GlobalStyleReset } from "../components/styles/GlobalStyleReset";
import type { AppProps } from "next/app";

import { useState } from "react";

import { Place, RegionVisual } from "../types";
import { Navigation } from "../components/Navigation";
import { FavContext } from "../store/appContext";

// const place: Place = {
//   placeName: "",
//   placeImage: "",
//   id: "",
//   location: "",
//   region: "",
//   placeDesc: "",
// };

// const regionVisual: RegionVisual = "alentejo";

const MyApp = ({ Component, pageProps }: AppProps) => {
  // const [selectedFavPlaces, setSelectedFavPlaces] = useState<Place[]>([]);
  // const [regionVisualColor, setRegionVisualColor] =
  //   useState<RegionVisual>(regionVisual);
  // const [selectedPlaces, setSelectedPlaces] = useState<Place[]>([]);

  // const addToFavouritesHandler = (place: Place) => {
  //   setSelectedFavPlaces((prevPlaces) => {
  //     return prevPlaces?.concat(place);
  //   });
  // };

  return (
    <>
      <Component {...pageProps} />
      <Navigation />
      <GlobalStyleReset />
    </>
  );
};

export default MyApp;
