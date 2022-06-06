import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Place, RegionVisual } from "../types";

type FavContextObj = {
  selectedPlaces: Place[];
  addToFavourites: (place: Place, regionVisual: RegionVisual) => void;
};

export const FavContext = createContext<FavContextObj>({
  selectedPlaces: [],
  addToFavourites: () => {},
});

const FavContextProvider = (props: any) => {
  const [selectedFavPlaces, setSelectedFavPlaces] = useState<Place[]>([]);

  const addToFavouritesHandler = (place: Place, regionVisual: RegionVisual) => {
    setSelectedFavPlaces((prevPlace) => {
      return prevPlace?.concat(place);
    });
  };

  const contextValue: FavContextObj = {
    selectedPlaces: selectedFavPlaces,
    addToFavourites: addToFavouritesHandler,
  };

  return (
    <FavContext.Provider value={contextValue}>
      {props.children}
    </FavContext.Provider>
  );
};

export default FavContextProvider;
