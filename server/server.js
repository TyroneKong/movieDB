const express = require("express");
const app = express();
const PORT = 8789;
const cors = require("cors");
const movieRoute = require("./routes/movies");
const nowPlayingRoute = require("./routes/nowPlaying");
const mainVideoRoute = require("./routes/mainVideo");
const filmRoute = require("./routes/films");
const trendingRoute = require("./routes/trending");
const seriesRoute = require("./routes/series");
const userRoute = require("./routes/userReview");
const movieReviewRoute = require("./routes/reviews");
require("dotenv").config();

const mongoose = require("mongoose");

const uri = process.env.URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection successfull");
});

app.use(express.json());
app.use(cors());

app.use(
  "/",
  movieRoute,
  nowPlayingRoute,
  mainVideoRoute,
  filmRoute,
  seriesRoute,
  trendingRoute,
  userRoute,
  movieReviewRoute
);

app.get("/", (req, res) => {
  res.json("Welcome to the movie api");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening port: ${PORT}`);
  }
});
