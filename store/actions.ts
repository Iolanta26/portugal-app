import { Place } from "../types";
import { ActionType } from "./action-types";
// import { PlacesState } from "./reducers/favouriteReducer";

export type Action = { type: "ADD_PLACE_TO_FAVOURITE"; payload: Place };

// import { Place } from "../types";
export const AddAction = (favouritePlace: Place): Action => ({
  type: "ADD_PLACE_TO_FAVOURITE",
  payload: favouritePlace,
});

// export const RemoveAction = (favouritePlace: Place) => ({
//   type: ActionType.REMOVE_PLACE_FROM_FAVORITE,
//   payload: favouritePlace,
// });

// export type Action = AddAction | RemoveAction;

// const ADD_PLACE_TO_FAVOURITE = "ADD_PLACE_TO_FAVOURITE";

// const REMOVE_PLACE_FROM_FAVOURITE = "REMOVE_PLACE_FROM_FAVOURITE";

// export const setPersonToFavorite = (favouritePlace: Place) => ({
//   type: ADD_PLACE_TO_FAVOURITE,
//   payload: favouritePlace,
// });

// export const removePersonFromFavorite = (favouritePlace: Place) => ({
//   type: REMOVE_PLACE_FROM_FAVOURITE,
//   payload: favouritePlace,
// });
