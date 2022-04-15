const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/series/:genre", (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&language=en-UK&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${req.params.genre}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
    )
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
