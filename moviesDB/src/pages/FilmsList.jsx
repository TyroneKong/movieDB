import React from "react";
import FilmsCard from "./FilmsCard";
import "../components/film/FilmList.scss";

function FilmsList({ data }) {
  return (
    <div className="film__card">
      <FilmsCard data={data} />
    </div>
  );
}

export default FilmsList;
