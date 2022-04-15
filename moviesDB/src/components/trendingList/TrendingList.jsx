import React from "react";
import TrendingCard from "../trendingCard/TrendingCard";
import "./TrendingList.scss";

function TrendingList({ data }) {
  return (
    <div className="trendingList">
      {data.map((item, index) => {
        return <TrendingCard key={index} poster={item.poster_path} />;
      })}
    </div>
  );
}

export default TrendingList;
