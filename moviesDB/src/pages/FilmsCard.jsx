import { React } from "react";
import "../components/film/FilmCard.scss";

function FilmsCard({ data }) {
  return (
    <div className="container">
      {data.map((movie, index) => {
        return (
          <div className="film" key={index}>
            <img
              className="film__image"
              src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`}
            ></img>
          </div>
        );
      })}
    </div>
  );
}

export default FilmsCard;
