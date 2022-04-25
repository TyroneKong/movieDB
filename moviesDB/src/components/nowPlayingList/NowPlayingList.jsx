import axios from "axios";
import { React, useState, useEffect } from "react";
import NowPlayingCard from "../nowPlayingCard/NowPlayingCard";
import "./NowPlayingList.scss";

function NowPlayingList({ nowplaying, video,review, setReview}) {

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
                data={movie}
                setReview={setReview}
                review={review}
           
                
              />
              
            </div>
          );
        })}
      </div>
    </>
  );
}

export default NowPlayingList;
