const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  publicPath: 'http://localhost:8001/',
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'mfe',
        filename: 'remoteEntry.js',
        exposes: {
          './microFrontendComponent': './src/components/microFrontendComponent.vue',
        },
        shared: require('./package.json').dependencies,
      }),
    ],
  },
  devServer: {
    port: 8001,
  },
};