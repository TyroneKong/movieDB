import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movies from "./components/movies/Movies";
import { React, useState } from "react";
import axios from "axios";
import Series from "./series/Series";
import NewandPopular from "./pages/NewandPopular";
import Films from "./pages/Films";
import MyList from "./pages/MyList";
import AudioandSubtitles from "./pages/AudioandSubtitles";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState(false);

  const fetchMovies = async (input) => {
    try {
      const data = await axios.get(`http://localhost:8789/movies/${input}`);
      const filteredData = data.data.results.filter(
        (movie) =>
          movie.poster_path != null &&
          movie.backdrop_path != null &&
          movie.popularity > 30
      );
      console.log(filteredData);
      setMovies(filteredData);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const input = event.target.input.value;
    setSearchResults(true);
    fetchMovies(input);
  };

  return (
    <div className="App">
      <Router>
        <Header handleSubmit={handleSubmit} />

        <Switch>
          <Route path="/" component={Movies} exact />
          <Route
            path="/home"
            render={(props) => (
              <Movies movies={movies} searchResults={searchResults} exact />
            )}
          />

          <Route path="/series" component={Series} />
          <Route path="/films" component={Films} />
          <Route path="/newandpopular" component={NewandPopular} />
          <Route path="/mylist" component={MyList} />
          <Route path="/audioandsubtitles" component={AudioandSubtitles} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
