const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const path = require('path');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: ['react-hot-loader/patch', './src/js/index.jsx'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src/js'),
        use: [
          'babel-loader',
          { loader: 'eslint-loader', options: { fix: true } },
        ],
      },
      {
        test: /\.png$/,
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'src/images'),
          path.resolve(__dirname, 'public'),
        ],
        loader: 'file-loader',
        options: {
          name: devMode ? '[name].[ext]' : '[contenthash].[ext]',
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src/styles'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: devMode },
          },
          'css-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src/styles'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: devMode,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: devMode
                  ? '[path][name]__[local]'
                  : '[hash:base64]',
              },
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer, cssnano],
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.png'],
    alias: {
      js: path.resolve(__dirname, 'src/js'),
      styles: path.resolve(__dirname, 'src/styles'),
      images: path.resolve(__dirname, 'src/images'),
      'react-dom': '@hot-loader/react-dom',
    },
    symlinks: false,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      template: './public/index.html',
      title: 'React Concepts',
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[contenthash].css',
    }),
  ],
  output: {
    filename: devMode ? '[name].js' : '[name].[contenthash].js',
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
