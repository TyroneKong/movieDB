const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/movies/:title", (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=2f39c6d4e6f81ddb8e7919599d2a5894&language=en-US&query=${req.params.title}&page=1&include_adult=false}`
    )
    .then((response) => {
      res.json(response.data);
    });
});

module.exports = router;
