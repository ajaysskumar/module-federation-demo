// filepath: /Users/ajaykumar/Projects/Personal/js-demos/micro-frontend/remote-app/webpack.config.js
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    port: 3001,
    static: {
      directory: path.join(__dirname, "build"), // Serve static files from the 'build' directory
    },
    historyApiFallback: false, // Disable fallback to index.html for non-root paths
  },
  output: {
    path: path.resolve(__dirname, "build"), // Specify the output directory
    publicPath: "http://localhost:3001/",
    clean: true, // Clean the output directory before each build
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i, // Match .css files
        use: ["style-loader", "css-loader"], // Use style-loader and css-loader
      },
      {
        test: /\.svg$/i, // Match .svg files
        type: "asset/resource", // Use Webpack's asset/resource for SVGs
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remoteApp",
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "./src/Header",
      },
      shared: {
        react: {
          singleton: true
        },
        "react-dom": {
          singleton: true
        },
      },
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};