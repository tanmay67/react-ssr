const path = require('path');
const webpack = require('webpack');

module.exports = {
  target: 'web',
  entry: './src/client.js',
  output: {
    filename: 'client_bundle.js',
    path: path.resolve(__dirname, 'build/public'),
    publicPath: '/build/public',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          presets: [
            'react',
            'stage-0',
            [
              'env',
              {
                target: { browsers: ['last 2 versions'] },
              },
            ],
          ],
        },
      },
    ],
  },
  mode: 'development',
  stats: {
    colors: true,
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {},
    }),
  ],
};
