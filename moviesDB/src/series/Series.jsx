import React from "react";
import Select from "react-select";
import { useState, useEffect } from "react";
import axios from "axios";
import SeriesList from "./SeriesList";
import "../components/series/Series.scss";

function Series() {
  const [series, setSeries] = useState([]);
  const [selectionTitle, setSelectionTitle] = useState("");
  const selection = async (e) => {
    const data = await axios.get(`http://localhost:8789/series/${e.value}`);
    setSelectionTitle(e.label);
    setSeries(data.data.results);
  };

  const options = [
    { value: 10759, label: "Action and Adventure" },
    { value: 16, label: "Animation" },
    { value: 35, label: "Comedy" },
    { value: 80, label: "Crime" },
    { value: 99, label: "Documentary" },
    { value: 18, label: "Drama" },
    { value: 10751, label: "Family" },

    { value: 9648, label: "Mystery" },
    { value: 10402, label: "Music" },
    { value: 10763, label: "News" },
    { value: 10764, label: "Reality" },
    { value: 10766, label: "Soap" },
    { value: 10765, label: "Science Fiction and fantasy" },
    { value: 10767, label: "Talk" },
    { value: 10768, label: "War and Politics" },
    { value: 37, label: "Western" },
  ];

  return (
    <div>
      <h2>Series</h2>
      <h2>{selectionTitle}</h2>
      <Select
        onChange={(event) => selection(event)}
        className="series"
        options={options}
      />

      <SeriesList data={series} />
    </div>
  );
}

export default Series;
