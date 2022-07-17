const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require('terser-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

const fs = require('fs');
const lessToJs = require('less-vars-to-js');
const defaultTheme = lessToJs(fs.readFileSync(path.join(__dirname, 'src/styles/variables.less'), 'utf8'));

const isProd = process.env.NODE_ENV === 'production';

const config = {
  entry: {
    main: path.resolve(__dirname, 'src/index.tsx')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", '.less'],
    plugins: [new TsconfigPathsPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',   // creates style nodes from JS strings
          'css-loader',     // translates CSS into CommonJS
          {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              lessOptions: {
                modifyVars: defaultTheme,
                javascriptEnabled: true
              },
              sourceMap: true,
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource'
        // use: [
        //   {
        //     loader: 'url-loader',
        //     options: {
        //       limit: 8192
        //     }
        //   },
        // ]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: "index.html",
      favicon: "./src/assets/img/LOGO.png"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new NodePolyfillPlugin()
  ],
};

if (isProd) {
  config.mode = "production";
  config.optimization = {
    minimizer: [new TerserWebpackPlugin()],
    runtimeChunk: 'single',
    moduleIds: 'deterministic',
    splitChunks: {
      chunks: 'all',
      minSize: 2000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: Infinity,
      enforceSizeThreshold: 5000,
      automaticNameDelimiter: '~',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vds',
          // name(module) {
          //   const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
          //   return `vendor.${packageName.replace('@', '')}`;
          // },
          chunks: 'all',
          reuseExistingChunk: true
        },
        default: {
          minChunks: 2,
          reuseExistingChunk: true
        }
      }
    }
  };
} else {
  config.mode = "development";
  config.devtool = 'inline-source-map';
  config.devServer = {
    port: 8080,
    open: true,
    hot: true,
    historyApiFallback: true,
    compress: true,
    devMiddleware: {
      publicPath: '/',
    },
    proxy: {
      '/api': {
        target: 'https://hats-api-server-v2.herokuapp.com',
        secure: false,
        pathRewrite: { '^/api': '' },
        changeOrigin: true
      }
    }
  };
}

module.exports = config;