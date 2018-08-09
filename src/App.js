import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import MovieContainer from "./components/MovieContainer";
import RecommendedMovieContainer from './components/recommendedMovieContainer';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MovieContainer />
        <RecommendedMovieContainer />
      </div>
    );
  }
}

export default App;
