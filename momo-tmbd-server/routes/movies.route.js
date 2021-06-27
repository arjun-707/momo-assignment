
const {
  popular,
  latest
} = require("../controllers/movie.controller");

exports.moviesRoutes = (app) => {
  app.get("/popular", popular);
  app.get("/latest", latest);
}