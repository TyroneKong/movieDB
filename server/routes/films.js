const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/films/:genre", (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=2f39c6d4e6f81ddb8e7919599d2a5894&language=en-US&=popularity.desc&with_genres=${req.params.genre}&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    )
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
