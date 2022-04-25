import { React, useEffect } from "react";
import NowPlaying from "../nowPlaying/NowPlaying";



function Movies({ movies, searchResults }) {
 
 
 
  return (
    <div>
      <NowPlaying movies={movies} searchResults={searchResults} />
    </div>
  );
}

export default Movies;
