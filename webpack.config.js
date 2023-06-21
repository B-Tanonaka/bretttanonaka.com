const path = require('path');

module.exports = {
  entry: path.join(__dirname, './client/src/index.tsx'),
  output: {
    path: path.join(__dirname, '/client/dist'),
    filename: 'bundle.min.js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx?)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/client/src/index.html'),
    }),
  ],
};
