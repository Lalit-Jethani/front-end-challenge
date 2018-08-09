import React, { Component } from "react";
import { connect } from "react-redux";
import MovieDetails from "./MovieDetails";
import { bindActionCreators } from "redux";
import { fetchMovieRecommendationList } from "./../actions/movies_Action";

class MovieContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { hasFetched: false };
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if (
      Object.keys(nextProps.movie).length === 0 &&
      nextProps.movie.constructor === Object
    ) {
      return false;
    } else return true;
  };

  componentDidUpdate = () => {
    this.props.fetchMovieRecommendationList(this.props.movie.id);
  };

  render() {
    return (
      <div>
        {/* {this.props.isLoading ? <Loader /> : null} */}
        <MovieDetails movie={this.props.movie ? this.props.movie : {}} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.movies.movie,
    isLoading: state.movies.isFetching
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchMovieRecommendationList }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieContainer);
