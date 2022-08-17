import { combineReducers } from "redux";
import favoriteReducer from "./favouriteReducer";

const reducers = combineReducers({
  favoriteReducer,
});

export default reducers;
