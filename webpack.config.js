const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './public/src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: path.join(__dirname, 'src'),
    publicPath: '/',
    filename: 'index.js'
  },
  devServer: {
    contentBase: './public'
  },
  target: 'web',
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      DEBUG_PROD: false,
      START_MINIMIZED: false
    })
  ]
}