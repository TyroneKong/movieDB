import React from "react";
import "./MovieCard.scss";

function MovieCard({ poster, id, video }) {
  return (
    <div className="poster">
      <div className="poster__container">
        <img
          onClick={() => video(id)}
          className="poster__image"
          src={` http://image.tmdb.org/t/p/w185/${poster}`}
        />
      </div>
    </div>
  );
}

export default MovieCard;
