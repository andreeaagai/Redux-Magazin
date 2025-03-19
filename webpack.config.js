const path = require('path');

module.exports = {
  entry: './src/index.js',  
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'dist'),  
  },
  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
      "fs": false, 
      "path": require.resolve("path-browserify"),
      "stream": require.resolve("stream-browserify"),
      "buffer": require.resolve("buffer/"),
      "url": require.resolve("url/"),
      "http": require.resolve("stream-http"),
      "querystring": require.resolve("querystring-es3"),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devtool: 'source-map',
};
