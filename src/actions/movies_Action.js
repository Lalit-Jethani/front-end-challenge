import axios from "axios";
import {
  REQUEST_MOVIESLIST,
  RECIEVE_MOVIESLIST,
  REQUEST_MOVIE,
  RECIEVE_MOVIE,
  REQUEST_MOVIESLISTRECOMMENDATIONS,
  RECIEVE_MOVIESLISTRECOMMENDATIONS
} from "./types";

const ROOT_URL_MOVIELIST = "https://api.themoviedb.org/3";
const API_KEY_MOVIELIST = "964039f2ad49184ebd57ad0afbf7b7df";
const ROOT_URL_MOVIE = "https://sbot-fe-test.herokuapp.com/api/v1";

function requestMovieRecommendationList() {
  return {
    type: REQUEST_MOVIESLISTRECOMMENDATIONS,
    payload: { isfetching: true }
  };
}

export function fetchMovieRecommendationList(searchString) {
  return function(dispatch) {
    dispatch(requestMovieRecommendationList());
    axios
      .get(
        `${ROOT_URL_MOVIELIST}/movie/${searchString}/recommendations?api_key=${API_KEY_MOVIELIST}&language=en-US&page=1`
      )
      .then(response => {
        dispatch({
          type: RECIEVE_MOVIESLISTRECOMMENDATIONS,
          payload: { response: response.data, isfetching: false }
        });
      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        // dispatch(authError('Bad Login Info'));
      });
  };
}

function requestMovieList() {
  return {
    type: REQUEST_MOVIESLIST,
    payload: { isfetching: true }
  };
}

export function fetchMovieList(searchString) {
  return function(dispatch) {
    dispatch(requestMovieList());
    axios
      .get(
        `${ROOT_URL_MOVIELIST}/search/movie?query=${searchString}&api_key=${API_KEY_MOVIELIST}`
      )
      .then(response => {
        dispatch({
          type: RECIEVE_MOVIESLIST,
          payload: { response: response.data, isfetching: false }
        });
      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        // dispatch(authError('Bad Login Info'));
      });
  };
}

function requestMovie() {
  return {
    type: REQUEST_MOVIE,
    payload: { isfetching: true }
  };
}

export function fetchMovie(searchString) {
  return function(dispatch) {
    dispatch(requestMovie());
    axios
      .get(`${ROOT_URL_MOVIE}/movies?query=${searchString}`)
      .then(response => {
        dispatch({
          type: RECIEVE_MOVIE,
          payload: { response: response.data, isfetching: false }
        });
      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        // dispatch(authError('Bad Login Info'));
      });
  };
}
