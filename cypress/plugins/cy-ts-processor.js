const webpackPreprocessor = require("@cypress/webpack-preprocessor");

module.exports = (on) => {
  const options = {
    // send in the options from your webpack.config.js, so it works the same
    // as your app's code
    webpackOptions: require("../../config/webpack.config"),
    watchOptions: {},
  };

  on("file:preprocessor", webpackPreprocessor(options));
};