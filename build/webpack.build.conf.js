const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const buildWebpackConfig = merge(baseWebpackConfig, {
  // BUILD config
  mode: 'production',
  module: {
    rules: [{
      test: /\.(woff(2)?|ttf|otf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      options: {
        name: '../fonts/[name].[ext]',
        emitFile: false,
      }
    },]
  },
  plugins: [],
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
});
