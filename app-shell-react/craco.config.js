const { ModuleFederationPlugin } = require("webpack").container;
const allDeps = require("./package.json").dependencies;

module.exports = ({ env }) => ({
  plugins: [
    {
      plugin: ModuleFederationPlugin,
      options: {
        shared: {
          ...allDeps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        },
      },
    },
  ],
});
