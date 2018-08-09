import { combineReducers } from "redux";
import MovieReducer from "./movie_reducer";

const rootReducer = combineReducers({
  movies: MovieReducer
});

export default rootReducer;
