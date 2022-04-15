const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/getVideo/:id", (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${req.params.id}/videos?api_key=2f39c6d4e6f81ddb8e7919599d2a5894&language=en-US`
    )
    .then((response) => {
      res.status(200).json(response.data);
    });
});

module.exports = router;
