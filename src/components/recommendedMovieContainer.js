import React, { Component } from "react";
import { connect } from "react-redux";
import RecommendedMovie from "./recommendedMovie";

class MovieContainer extends Component {
  renderRecommendations = (movie, index) => {
    if (index < 5) return <RecommendedMovie {...movie} />;
  };

  render() {
    let recommendedMovie =
      this.props.movieRecommendations.length === 0 ? null : "YOU MAY ALSO LIKE";
    return (
      <div>
        <div>{recommendedMovie} </div> <br />
        <div className="movieRecommendations">
          {this.props.movieRecommendations
            ? this.props.movieRecommendations.map(this.renderRecommendations)
            : null}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movieRecommendations: state.movies.movieRecommendations,
    isLoading: state.movies.isFetchingRecommendations
  };
}

export default connect(
  mapStateToProps,
  null
)(MovieContainer);
