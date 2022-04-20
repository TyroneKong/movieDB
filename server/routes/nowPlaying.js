const express = require("express");
const router = express.Router();

require("dotenv").config();
const nowPlayingController = require("../controllers/nowPlayingController");

router.get("/nowPlaying", nowPlayingController.getNowPlaying);

module.exports = router;
