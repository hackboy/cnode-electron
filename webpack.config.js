var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
module.exports = {
  // entry: './js/entry.js',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:3000/', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
     path.join(__dirname, 'app/client.jsx')
  ],
  output: {
    path: __dirname + '/app/build/',
    filename: 'app.js',
    publicPath: '/app/build/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: [
          'react-hot',
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.txt$/,
        loader: 'raw-loader',
        include: path.resolve(__dirname, 'app/components/raw-code'),
      },
      {
        test: /\.md$/,
        loader: 'raw-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  eslint: {
    configFile: '.eslintrc'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

