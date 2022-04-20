const axios = require("axios");

exports.getTrending = (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}&page=2`
    )
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
