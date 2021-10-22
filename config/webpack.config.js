const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV === "development" ? "development" : "production",
  entry: path.resolve(__dirname, "../src/index.ts"),
  output: {
    libraryTarget: "umd",
    filename: `test.js`,
    path: path.resolve(__dirname, "../dist/"),
  },
  devtool: process.env.NODE_ENV === "development" ? "cheap-source-map" : false,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: [/node_modules/, /__tests__/],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
};
