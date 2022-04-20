const express = require("express");
const router = express.Router();
const User = require("../models/userReview.model");

const getComments = (req, res) => {
  User.find({})
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
    });
};

const createComment = (req, res) => {
  const userReview = req.body;
  const newUserReview = new User(userReview);
  newUserReview.save();
  res.json(userReview);
};

// get all comments
router.get("/getComments", getComments);

//create a new comment
router.post("/createComment", createComment);

module.exports = router;
