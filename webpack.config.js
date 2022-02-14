const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'cb-api-helper.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    library: {
      name: 'cbApiHelper',
      type: 'umd'
    }
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  mode: 'production'
}
