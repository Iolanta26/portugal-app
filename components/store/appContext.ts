import { createContext, Dispatch, SetStateAction } from "react";
import { Place, RegionVisual } from "../../types";

type AppContextType = {
  selectedFavouritePlace: Place;
  setSelectedFavouritePlace: Dispatch<SetStateAction<Place>>;
  regionVisualColor: RegionVisual;
  setRegionVisualColor: Dispatch<SetStateAction<RegionVisual>>;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);
