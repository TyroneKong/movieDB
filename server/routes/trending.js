const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/trending", (req, res) => {
  axios
    .get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=2f39c6d4e6f81ddb8e7919599d2a5894"
    )
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
