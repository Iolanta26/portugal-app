import { Place } from "../../types";
import { ActionType } from "../action-types";
import { Action } from "../actions";
// import { Action } from "../actions";

export interface PlacesState {
  favouritePlaces: Place[];
}

const initialState = {
  favouritePlaces: [],
};

const favoriteReducer = (state: PlacesState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_PLACE_TO_FAVOURITE: {
      return {
        // state,
        // ...action.payload,
        // favouritePlaces: [...state.favouritePlaces, action.payload],
        ...state,
        favouritePlaces: [...state.favouritePlaces, action.payload],
      };
    }

    // case ActionType.REMOVE_PLACE_FROM_FAVORITE:
    //   return {
    //     favouritePlaces: [
    //       ...state.favouritePlaces.filter(
    //         (favouritePlaces) => favouritePlaces !== action.payload
    //       ),
    //     ],
    //   };
    default:
      return state;
  }
};

export default favoriteReducer;

export type State = ReturnType<typeof favoriteReducer>;
