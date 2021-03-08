const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-docs", "@storybook/preset-scss"],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.splice(
      7,
      1,
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        loaders: [
          require.resolve("style-loader"),
          {
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1,
            },
          },
          require.resolve("sass-loader"),
        ],
      },
      {
        test: /\.module\.scss$/,
        loaders: [
          require.resolve("style-loader"),
          {
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          require.resolve("sass-loader"),
        ],
      }
    );
    config.resolve.alias['src'] = path.resolve(__dirname, '../src')
    return config;
  },
};