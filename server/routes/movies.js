const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/movies/:title", (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${req.params.title}&page=1&include_adult=false}`
    )
    .then((response) => {
      res.json(response.data);
    });
});

module.exports = router;
