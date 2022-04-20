const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();
const movieController = require("../controllers/moviesController");

router.get("/movies/:title", movieController.getMovie);

module.exports = router;
