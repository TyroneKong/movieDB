const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/films/:genre", (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&=popularity.desc&with_genres=${req.params.genre}&page=1&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    )
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
