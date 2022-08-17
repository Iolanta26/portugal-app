import { Place } from "../types";
import { ActionType } from "./action-types";

interface AddAction {
  type: ActionType.ADD_PLACE_TO_FAVOURITE;
  payload: Place;
}

interface RemoveAction {
  type: ActionType.REMOVE_PLACE_FROM_FAVORITE;
  payload: Place;
}

export type Action = AddAction | RemoveAction;
