const User = require("../models/userReview.model");

exports.getComments = (req, res) => {
  User.find({})
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.createComment = (req, res) => {
  const userReview = req.body;
  const newUserReview = new User(userReview);
  newUserReview.save();
  res.json(userReview);
};
