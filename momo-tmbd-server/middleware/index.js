const express = require("express");
const { moviesRoutes } = require("../routes/movies.route");

exports.initMiddleware = (app) => {
  app.use(express.json({ limit: "300mb", extended: true }));
  app.use(express.urlencoded({ limit: "300mb", extended: true }));
};
exports.routeMiddleware = (app) => {
  moviesRoutes(app);

  app.use((req, res) => {
    res.status(404).send({
      error: true,
      errorDesc: "endpoint not found",
    });
  });
};
