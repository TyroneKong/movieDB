const express = require("express");
const router = express.Router();
const reviewsController = require("../controllers/reviewsController");

router.get("/movieReview/:id", reviewsController.getMovieReview);

module.exports = router;
