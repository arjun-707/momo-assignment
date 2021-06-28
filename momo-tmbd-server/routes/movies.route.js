
const {
  popular,
  latest,
  movieDetail
} = require("../controllers/movie.controller");

exports.moviesRoutes = (app) => {
  app.get("/popular", popular);
  app.get("/latest", latest);
  app.get("/detail/:movie_id", movieDetail);
}