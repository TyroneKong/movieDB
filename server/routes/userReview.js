const express = require("express");
const router = express.Router();
const User = require("../models/userReview.model");
const userReviewController = require("../controllers/userReviewController");

// get all comments
router.get("/getComments", userReviewController.getComments);

//create a new comment
router.post("/createComment", userReviewController.createComment);

module.exports = router;
