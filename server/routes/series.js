const express = require("express");
const router = express.Router();
require("dotenv").config();
const seriesController = require("../controllers/seriesController");

router.get("/series/:genre", seriesController.getSeriesGenre);

module.exports = router;
