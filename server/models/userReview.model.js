const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserReviewSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserReviewSchema);

module.exports = User;
