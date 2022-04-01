
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  publicPath: 'http://localhost:8000/',
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'consumer',
        filename: 'remoteEntry.js',
        remotes: {
          mfe: 'mfe@http://localhost:8001/remoteEntry.js',
        },
      }),
    ],
  },
  devServer: {
    port: 8000
  }
};