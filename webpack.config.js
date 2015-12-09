var webpack = require('webpack');
var env = process.env.WEBPACK_ENV;

var plugins = [];

if (env === 'build') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
}

module.exports = {
  entry: './src/App.js',
  devtool: 'source-map',
   output: {
    path: './build/static',
    publicPath: '/static/',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
       // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
      // loads bootstrap's css.
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file-loader" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url-loader?limit=10000&mimetype=image/svg+xml" }
    ]
  },
  resolve: {
    root: require('path').resolve('./src'),
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
        proxy: {
            '/api*': {
                target: {
                  host: '0.0.0.0',
                  port: 8081
                },
                secure: false,
            },
        },
    },
  plugins: plugins
};
