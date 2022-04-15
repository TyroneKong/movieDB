import { React, useState, useEffect } from "react";
import axios from "axios";
import NowPlayingList from "../nowPlayingList/NowPlayingList";
import MainVideo from "../mainVideo/MainVideo";
import TrendingList from "../trendingList/TrendingList";
import MovieList from "../movieList/MovieList";

function NowPlaying({ movies, searchResults }) {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [videoKey, setVideoKey] = useState([]);
  const [trending, setTrending] = useState([]);

  const fetchNowPlaying = async () => {
    try {
      const data = await axios.get("http://localhost:8789/nowPlaying");
      const filterLanguage = data.data.filter(
        (movie) => movie.original_language === "en"
      );

      setNowPlaying(filterLanguage);
    } catch (err) {
      console.log(err);
    }
  };

  const getVideo = async (id) => {
    try {
      const video = await axios.get(`http://localhost:8789/getVideo/${id}`);
      const allVideos = video.data.results;
      const randomVideo =
        allVideos[Math.floor(Math.random() * allVideos.length)];

      setVideoKey(randomVideo.key);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchTrending = async () => {
    try {
      const trendingData = await axios.get("http://localhost:8789/trending");
      setTrending(trendingData.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNowPlaying();
  }, []);

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div>
      <MainVideo videoKey={videoKey} />
      <div className="card__container"></div>
      {searchResults ? (
        <MovieList movies={movies} video={getVideo} />
      ) : (
        <NowPlayingList video={getVideo} nowplaying={nowPlaying} />
      )}

      <div className="card__container">
        <h3>Trending List</h3>
      </div>
      <TrendingList data={trending} />
    </div>
  );
}

export default NowPlaying;
