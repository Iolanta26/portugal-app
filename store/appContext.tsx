import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Place, RegionVisual } from "../types";

type FavContextObj = {
  selectedPlaces: Place[];
  addToFavourites: (place: Place, regionVisual: RegionVisual) => void;
  regionVisualColor: RegionVisual;
  setRegionVisualColor: Dispatch<SetStateAction<RegionVisual>>;
};

export const FavContext = createContext<FavContextObj>({
  selectedPlaces: [],
  addToFavourites: () => {},
  regionVisualColor: "central",
  setRegionVisualColor: () => {},
});

const FavContextProvider = (props: any) => {
  const [selectedFavPlaces, setSelectedFavPlaces] = useState<Place[]>([]);
  const [regionVisualColor, setRegionVisualColor] = useState<RegionVisual>();

  const addToFavouritesHandler = (place: Place, regionVisual: RegionVisual) => {
    setSelectedFavPlaces((prevPlace) => {
      return prevPlace?.concat(place);
    });
    setRegionVisualColor(regionVisual);
  };

  const contextValue: FavContextObj = {
    selectedPlaces: selectedFavPlaces,
    addToFavourites: addToFavouritesHandler,
    regionVisualColor: "central",
    setRegionVisualColor: () => {},
  };

  return (
    <FavContext.Provider value={contextValue}>
      {props.children}
    </FavContext.Provider>
  );
};

export default FavContextProvider;
