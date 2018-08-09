import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "./Search";
import { bindActionCreators } from "redux";
import { fetchMovieList, fetchMovie } from "./../actions/movies_Action";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
  }

  getMovieList = searchStr => {
    if (searchStr) this.props.fetchMovieList(searchStr);
  };

  handleMovieSelection = searchStr => {
    if (searchStr) this.props.fetchMovie(searchStr);
  };

  handleChange = searchTerm => {
    this.setState({ searchTerm });
    if (searchTerm) this.getMovieList(searchTerm);
  };

  render() {
    return (
      <Search
        isLoading={this.props.isLoading}
        searchTerm={this.state.searchTerm}
        movieList={this.props.movieList}
        onChange={this.handleChange}
        handleMovieSelection={this.handleMovieSelection}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    movieList: state.movies.movies,
    isLoading: state.movies.isFetchingMovieList
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchMovieList, fetchMovie }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
