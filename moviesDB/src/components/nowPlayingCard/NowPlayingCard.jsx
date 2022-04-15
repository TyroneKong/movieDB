import React from "react";
import "./nowPlayingCard.scss";

function NowPlayingCard({ poster, video, id }) {
  return (
    <div className="nowPlayingCard">
      <img
        onClick={() => video(id)}
        className="nowPlayingCard__image"
        src={` http://image.tmdb.org/t/p/w185${poster}`}
        alt="movie poster"
      ></img>
    </div>
  );
}

export default NowPlayingCard;
