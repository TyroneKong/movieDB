const axios = require("axios");

exports.getMovieReview = (req, res) => {
  axios
    .get(
      `http://api.themoviedb.org/3/movie/${req.params.id}/reviews?api_key=2f39c6d4e6f81ddb8e7919599d2a5894&language=en-US
      `
    )
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
