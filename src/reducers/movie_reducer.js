import {
  REQUEST_MOVIESLIST,
  RECIEVE_MOVIESLIST,
  REQUEST_MOVIE,
  RECIEVE_MOVIE,
  REQUEST_MOVIESLISTRECOMMENDATIONS,
  RECIEVE_MOVIESLISTRECOMMENDATIONS
} from "../actions/types";

const defaultstate = {
  movies: [],
  movie: {
    title: "NARCOS",
    overview:
      "This raw, gritty series chronicles the gripping real-life stories of the drug kingpins of the late 1980s and the corroborative efforts of law enforcement to meet them head on in brutal, bloody conflict. It details the many, often-conflicting forces - legal, political, police, military and civilian - that clash in the effort to control cocaine, one of the worlds most valuable commoditie",
    full_backdrop_path: "https://images.alphacoders.com/633/633643.jpg"
  },
  movieRecommendations: []
};

export default function moviesByStringSearch(state = defaultstate, action) {
  switch (action.type) {
    case REQUEST_MOVIESLIST:
      return Object.assign({}, state, {
        isFetchingMovieList: true
      });

    case RECIEVE_MOVIESLIST:
      return Object.assign({}, state, {
        movies: action.payload.response.results,
        isFetchingMovieList: false
      });
    case REQUEST_MOVIESLISTRECOMMENDATIONS:
      return Object.assign({}, state, {
        isFetchingRecommendations: true
      });

    case RECIEVE_MOVIESLISTRECOMMENDATIONS:
      return Object.assign({}, state, {
        movieRecommendations: action.payload.response.results,
        isFetchingRecommendations: false
      });

    case REQUEST_MOVIE:
      return Object.assign({}, state, {
        isFetching: true
      });

    case RECIEVE_MOVIE:
      return Object.assign({}, state, {
        movie: action.payload.response,
        isFetching: false
      });
    default:
      return state;
  }
}
