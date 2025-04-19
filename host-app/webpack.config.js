const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    port: 3000,
  },
  output: {
    publicPath: "http://localhost:3000/",
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
      name: "hostApp",
      remotes: {
        remoteApp: "remoteApp@http://localhost:3001/remoteEntry.js",
      },
      shared: {
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true
        },
      },
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new CopyWebpackPlugin({
        patterns: [
          { from: "public", to: "", filter: (resourcePath) => !resourcePath.endsWith("index.html") }, // Exclude index.html
        ],
      }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};