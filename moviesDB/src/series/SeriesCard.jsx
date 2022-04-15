import React from "react";
import "../components/series/SeriesCard.scss";

function SeriesCard({ data }) {
  const filteredData = data.filter((series) => series.poster_path !== null);

  return (
    <div className="series__card">
      {filteredData.map((series, index) => {
        return (
          <div className="series__card-image-container" key={index}>
            <img
              className="series__card-image"
              src={`http://image.tmdb.org/t/p/w185/${series.poster_path}`}
            ></img>
          </div>
        );
      })}
    </div>
  );
}

export default SeriesCard;
