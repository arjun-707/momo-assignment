const {
  getPopularMovies,
  getLatestMovies,
  getMovieDetail
} = require("../services/movie.service");

exports.popular = async (req, res) => {
  try {
    const { data = null, status = 0, error = null } = await getPopularMovies();
    if (data && status === 200) {
      return res.status(200).send({
        message: "Popular movies fetched successfully",
        error: false,
        data: data,
      });
    }
    return res
      .status(400)
      .send({ message: error, error: true, data: null });
  } catch (ex) {
    return res.status(500).send({
      message: "internal server error",
      error: true,
      errorDesc: ex.message,
      data: null,
    });
  }
};
exports.latest = async (req, res) => {
  try {
    const { data = null, status = 0, error = null } = await getLatestMovies();
    if (data && status === 200) {
      return res.status(200).send({
        message: "Latest movies fetched successfully",
        error: false,
        data: data,
      });
    }
    return res
      .status(400)
      .send({ message: error, error: true, data: null });
  } catch (ex) {
    return res.status(500).send({
      message: "internal server error",
      error: true,
      errorDesc: ex.message,
      data: null,
    });
  }
};
exports.movieDetail = async (req, res) => {
  try {
    const { data = null, status = 0, error = null } = await getMovieDetail(req.params.movie_id);
    if (data && status === 200) {
      return res.status(200).send({
        message: "Movie detail fetched successfully",
        error: false,
        data: data,
      });
    }
    return res
      .status(400)
      .send({ message: error, error: true, data: null });
  } catch (ex) {
    return res.status(500).send({
      message: "internal server error",
      error: true,
      errorDesc: ex.message,
      data: null,
    });
  }
};
