const express = require("express");
const router = express.Router();
require("dotenv").config();
const filmController = require("../controllers/filmsController.js");

router.get("/films/:genre", filmController.getGenre);

module.exports = router;
