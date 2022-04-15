import React from "react";
import Select from "react-select";
import { useState, useEffect } from "react";
import axios from "axios";
import FilmsList from "./FilmsList";
import "../components/film/Films.scss";

function Films() {
  const [film, setFilm] = useState([]);
  const [selectionTitle, setSelectionTitle] = useState("");
  const selection = async (e) => {
    const data = await axios.get(`http://localhost:8789/films/${e.value}`);
    setSelectionTitle(e.label);
    setFilm(data.data.results);
  };

  const options = [
    { value: 28, label: "Action" },
    { value: 12, label: "Adventure" },
    { value: 16, label: "Animation" },
    { value: 35, label: "Comedy" },
    { value: 80, label: "Crime" },
    { value: 99, label: "Documentary" },
    { value: 18, label: "Drama" },
    { value: 10751, label: "Family" },
    { value: 14, label: "Fantasy" },
    { value: 36, label: "History" },
    { value: 9648, label: "Mystery" },
    { value: 10402, label: "Music" },
    { value: 10749, label: "Romance" },
    { value: 878, label: "Science Fiction" },
    { value: 10770, label: "TV Movie" },
    { value: 10752, label: "War" },
    { value: 37, label: "Western" },
    { value: 53, label: "Thriller" },
  ];

  return (
    <div>
      <h2>Films</h2>
      <h2>{selectionTitle}</h2>
      <Select
        onChange={(event) => selection(event)}
        className="films"
        options={options}
      />

      <FilmsList data={film} />
    </div>
  );
}

export default Films;
