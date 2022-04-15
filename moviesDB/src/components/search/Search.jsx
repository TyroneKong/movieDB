import React from "react";
import "./Search.scss";

function Search({ handleSubmit }) {
  return (
    <div className="search">
      <h1 className="search__title">Movie Database</h1>
      <form className="search__form" onSubmit={handleSubmit()}>
        <input
          className="search__input"
          name="input"
          type="text"
          placeholder="Search movies"
          required
        ></input>
        <button className="search__button" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default Search;
