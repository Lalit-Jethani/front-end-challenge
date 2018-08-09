import React from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import MovieDropDownItem from "./movieDropdownItem";

const Search = props => {
  const movieList = props.movieList ? props.movieList.map(e => e.title) : [];
  return (
    <form id="search" className="Search">
      <AsyncTypeahead
        allowNew={false}
        emptyLabel={false}
        isLoading={props.isLoading}
        multiple={false}
        options={movieList}
        labelKey="movies"
        minLength={2}
        onChange={e => props.handleMovieSelection(e)}
        onSearch={e => props.onChange(e)}
        placeholder="Search for a Movie..."
        renderMenuItemChildren={(option, props) => (
          <MovieDropDownItem movie={option} />
        )}
      />
    </form>
  );
};

export default Search;
