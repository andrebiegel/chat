const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const InterpolateHtmlPlugin = require("interpolate-html-plugin")
const deps = require("./package.json").dependencies
const path = require('path')
module.exports = {
  mode: "development",
  devtool: 'source-map',
  output: {
    publicPath: 'auto',
  },
  devServer: {
    port: 8082,
    static: {
      directory: path.join(__dirname, "dist"),
    },
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
          presets: [
            "@babel/preset-env" /* to transfer any advansed ES to ES5 */,
            "@babel/preset-react",
          ], // to compile react to ES5
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "ALERTING",
      filename: "remoteEntry.js",
      remotes: {
        CHAT: "ffopsChat@http://localhost:8083/remoteEntry.js",
      },
      exposes: {
        "./App": "./src/components/App",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new InterpolateHtmlPlugin({
      PUBLIC_URL: "static", // can modify `static` to another name or get it from `process`
    }),
  ],
}
