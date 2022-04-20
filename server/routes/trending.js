const express = require("express");
const router = express.Router();
const trendingController = require("../controllers/trendingController");
require("dotenv").config();

router.get("/trending", trendingController.getTrending);

module.exports = router;
