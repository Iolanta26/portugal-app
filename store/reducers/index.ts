import { combineReducers } from "redux";
import favoriteReducer from "./favouriteReducer";

const reducers = combineReducers({
  reducer: favoriteReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
