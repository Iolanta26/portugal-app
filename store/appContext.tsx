import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Place } from "../types";

type FavContextObj = {
  selectedPlaces: Place[];
  addToFavourites: (place: Place) => void;
  buttonIsHighlighted: boolean;
  // setButtonIsHighlighted: Dispatch<SetStateAction<boolean>>;
};

export const FavContext = createContext<FavContextObj>({
  selectedPlaces: [],
  addToFavourites: () => {},
  buttonIsHighlighted: false,
});

const FavContextProvider = (props: any) => {
  const [selectedFavPlaces, setSelectedFavPlaces] = useState<Place[]>([]);
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);

  const addToFavouritesHandler = (place: Place) => {
    setSelectedFavPlaces((prevPlace) => {
      return prevPlace?.concat(place);
    });
  };

  const contextValue: FavContextObj = {
    selectedPlaces: selectedFavPlaces,
    addToFavourites: addToFavouritesHandler,
    buttonIsHighlighted: buttonIsHighlighted,
    // setButtonIsHighlighted: setButtonIsHighlighted,
  };

  return (
    <FavContext.Provider value={contextValue}>
      {props.children}
    </FavContext.Provider>
  );
};

export default FavContextProvider;
