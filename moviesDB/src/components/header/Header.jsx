import React from "react";
import "./Header.scss";
import Search from "../search/Search";
import { Link } from "react-router-dom";
import filmcube from "../assets/images/filmcube.png";

const Header = ({ handleSubmit }) => {
  return (
    <div className="header">
      <nav className="header__nav">
        <ul className="header__list">
          <li>
            <img className="header__logo" src={filmcube} />
          </li>
          <li>
            <Link className="header__item" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="header__item" to="/films">
              Films
            </Link>
          </li>

          <li>
            <Link className="header__item" to="/series">
              Series
            </Link>
          </li>
          <li>
            <Link className="header__item" to="/newandpopular">
              New & Popular
            </Link>
          </li>
          <li>
            <Link className="header__item" to="/myList">
              My List
            </Link>
          </li>
          <li>
            <Link className="header__item" to="/recommendations">
              Recommendations
            </Link>
          </li>
          <Link className="header__item" to="/movieReviews">
            Movie reviews
          </Link>
          <li>
            <Search handleSubmit={() => handleSubmit} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
