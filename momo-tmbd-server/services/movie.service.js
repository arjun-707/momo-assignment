const axios = require("axios").default;
const { format } = require("util");
const { movieAPIKey, movieAccessKey } = require("../configs/config");
const { moviesUrl } = require("../configs/urls");

const getPopularMovies = async () => {
  try {
    return await axios(format(`${moviesUrl.popular}`, movieAPIKey));
  } catch (ex) {
    if (ex.response && ex.response.data.error)
      return { error: ex.response.data.error };
    throw { message: ex.message };
  }
};
const getLatestMovies = async () => {
  try {
    return await axios(format(`${moviesUrl.latest}`, movieAPIKey));
  } catch (ex) {
    if (ex.response && ex.response.data.error)
      return { error: ex.response.data.error };
    throw { message: ex.message };
  }
};

module.exports = {
  getPopularMovies,
  getLatestMovies,
};
