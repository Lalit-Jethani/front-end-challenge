import React from "react";

const RecommendedMovie = props => {
  return (
    <div
      className="Item"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${
          props.backdrop_path
        })`
      }}
    >
      <div className="overlay">
        <div className="title">{props.title}</div>
        <div className="rating">{props.vote_average} / 10</div>
        <div className="plot">{props.overview}</div>
      </div>
    </div>
  );
};

export default RecommendedMovie;
