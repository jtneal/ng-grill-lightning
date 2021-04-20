const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
  plugins: [
    new WebpackManifestPlugin({
      filter: (file) => file.name.endsWith('.js') || file.name.endsWith('.css'),
      seed: { customElement: 'custom-menu' },
    }),
  ],
};
