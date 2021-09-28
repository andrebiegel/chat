const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin
const InterpolateHtmlPlugin = require("interpolate-html-plugin")
const deps = require("./package.json").dependencies
const path = require('path')
module.exports = {
  entry: './src/index',
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
      port: 8084,
  },
  output: {
      publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
        {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ['@babel/preset-react'],
            },
        },
    ],
},
  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      filename: "remoteEntry.js",
      //remotes: {
      //  chat: "chat@http://localhost:8083/remoteEntry.js",
      //  alerting: "alerting@http://localhost:8082/remoteEntry.js",
      //},
      shared: {
        ...deps,
        react: {
          import: "react",
          singleton: true,
          shareScope: "default",
          shareKey: "react",
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: deps["react-router-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new InterpolateHtmlPlugin({
      PUBLIC_URL: "public", // can modify `static` to another name or get it from `process`
    }),
  ],

}
