module.exports = {
  entry: './static/js/index.jsx',
  output: {
    filename: './assets/js/app.js'
  },
  devtool: 'source-map',
  stats: {
    colors: true,
    reasons: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },{
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
}