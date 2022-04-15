const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/nowPlaying", (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`
    )
    .then((response) => {
      res.status(200).json(response.data.results);
    });
});

module.exports = router;
