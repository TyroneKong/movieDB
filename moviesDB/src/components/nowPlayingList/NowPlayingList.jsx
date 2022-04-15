import React from "react";
import NowPlayingCard from "../nowPlayingCard/NowPlayingCard";
import "./NowPlayingList.scss";

function NowPlayingList({ nowplaying, video }) {
  return (
    <>
      <h3>Now Playing</h3>
      <div className="nowPlayingList">
        {nowplaying.map((movie, index) => {
          return (
            <div key={index}>
              <NowPlayingCard
                id={movie.id}
                poster={movie.poster_path}
                video={video}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default NowPlayingList;
