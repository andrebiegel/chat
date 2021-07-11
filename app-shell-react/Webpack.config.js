const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin
const InterpolateHtmlPlugin = require("interpolate-html-plugin")
const deps = require("./package.json").dependencies
module.exports = {
  mode: "development",
  devServer: {
    port: 8084,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        /* The following line to ask babel 
             to compile any file with extension
             .js */
        test: /\.js?$/,
        /* exclude node_modules directory from babel. 
            Babel will not compile any files in this directory*/
        exclude: /node_modules/,
        // To Use babel Loader
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"], // to compile react to ES5
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
