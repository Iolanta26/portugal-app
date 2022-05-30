import { createContext, Dispatch, SetStateAction } from "react";
import { Place } from "../../types";

type AppContextType = {
  selectedFavouritePlace: Place;
  setSelectedFavouritePlace: Dispatch<SetStateAction<Place>>;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);
