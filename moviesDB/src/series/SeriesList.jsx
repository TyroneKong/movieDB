import React from "react";
import SeriesCard from "./SeriesCard";
import "../components/series/SeriesList.scss";

function SeriesList({ data }) {
  return (
    <div className="series__card-container">
      <SeriesCard data={data} />
    </div>
  );
}

export default SeriesList;
