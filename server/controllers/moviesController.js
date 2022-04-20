const axios = require("axios");

exports.getMovie = (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${req.params.title}&page=1&include_adult=false}`
    )
    .then((response) => {
      res.json(response.data);
    });
};
