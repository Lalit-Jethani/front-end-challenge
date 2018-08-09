import React from "react";
import StarRatingComponent from "react-star-rating-component";

const MovieDetails = props => {
  const { full_backdrop_path } = props.movie;

  return (
    <div
      id="hero"
      className="Hero"
      style={{ backgroundImage: `url(${full_backdrop_path})` }}
    >
      <div className="content">
        <h1 className="logo" alt="">
          {props.movie.title}{" "}
        </h1>
        <span>
          <StarRatingComponent
            name="movieRating"
            starCount={10}
            value={props.movie.vote_average ? props.movie.vote_average : 8.5}
          />
        </span>
        <h2>Synopsis</h2>
        <p>{props.movie.overview}</p>
      </div>
      <div className="overlay" />
    </div>
  );
};

export default MovieDetails;
