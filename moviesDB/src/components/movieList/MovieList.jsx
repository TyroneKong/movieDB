import React from "react";
import MovieCard from "../movieCard/MovieCard";
import "./MovieList.scss";

function MovieList({ movies, video }) {
  return (
    <>
      <h3>Search Results</h3>
      <div className="movieList">
        {movies.map((movie, index) => {
          return (
            <div key={index}>
              <MovieCard
                poster={movie.poster_path}
                video={video}
                id={movie.id}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MovieList;
