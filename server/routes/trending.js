const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/trending", (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}&page=2`
    )
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
