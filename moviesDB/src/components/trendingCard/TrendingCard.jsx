import React from "react";
import "./TrendingCard.scss";

function TrendingCard({ poster }) {
  return (
    <div className="trending">
      <img
        className="trending__image"
        src={`http://image.tmdb.org/t/p/w185/${poster}`}
      ></img>
    </div>
  );
}

export default TrendingCard;
