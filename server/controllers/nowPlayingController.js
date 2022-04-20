const axios = require("axios");

exports.getNowPlaying = (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`
    )
    .then((response) => {
      res.status(200).json(response.data.results);
    });
};
