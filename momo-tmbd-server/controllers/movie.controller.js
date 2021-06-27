const {
  getPopularMovies,
  getLatestMovies,
} = require("../services/movie.service");

exports.popular = async (req, res) => {
  try {
    const { data = null, status = 0 } = await getPopularMovies();
    if (data && status === 200) {
      return res.status(200).send({
        message: "Popular movies fetched successfully",
        error: false,
        data: data,
      });
    }
    return res
      .status(400)
      .send({ message: "something went wrong", error: true, data: null });
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
    const { data = null, status = 0 } = await getLatestMovies();
    if (data && status === 200) {
      return res.status(200).send({
        message: "Latest movies fetched successfully",
        error: false,
        data: data,
      });
    }
    return res
      .status(400)
      .send({ message: "something went wrong", error: true, data: null });
  } catch (ex) {
    return res.status(500).send({
      message: "internal server error",
      error: true,
      errorDesc: ex.message,
      data: null,
    });
  }
};
