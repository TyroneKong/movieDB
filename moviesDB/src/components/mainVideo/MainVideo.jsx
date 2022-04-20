import { React } from "react";
import "./MainVideo.scss";
import ReactPlayer from "react-player";

function MainVideo({ videoKey }) {
  return (
    <div className="mainVideo">
      <ReactPlayer
        className="mainVideo__player"
        controls={true}
        width="100%"
        height="80vh"
        url={`https://www.youtube.com/watch?v=${videoKey}`}
      />
    </div>
  );
}

export default MainVideo;
