const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/getVideo/:id", (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${req.params.id}/videos?api_key=${process.env.API_KEY}&language=en-US`
    )
    .then((response) => {
      res.status(200).json(response.data);
    });
});

module.exports = router;
