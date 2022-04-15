import { React } from "react";
import MovieList from "../movieList/MovieList";
// import Search from "../search/Search";
import NowPlaying from "../nowPlaying/NowPlaying";

function Movies({ movies, searchResults }) {
  return (
    <div>
      <NowPlaying movies={movies} searchResults={searchResults} />

      {/* <MovieList movies={movies} /> */}
    </div>
  );
}

export default Movies;
