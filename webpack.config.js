const path = require('path')

module.exports = {
  entry: path.resolve('./src/index'),
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'js-sdk.js',
    library: {
      type: 'umd'
    }
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'json']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  mode: 'production'
}
