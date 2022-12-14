// const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
// const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const fixPath = require('./utils');

const {appName, projectName, PUBLIC_DIR, BUILD_DIR, DEV_ROOT_DIR} = require('../configs');

const rootDir = fixPath(`${DEV_ROOT_DIR}/`);

const app = path.resolve(__dirname, `../${appName}`);
const publics = path.resolve(app, PUBLIC_DIR || '../public');

const frame = appName === 'vue' ? {uiframe: ['vue']} : {uiframe: ['react', 'react-dom']};

const entry = {
  app: [path.resolve(app, 'index.jsx')],
  ...frame,
};
const templ = path.resolve(publics, 'index.html');
const icon = path.resolve(publics, 'favicon.ico');

const htmlPlugin = () =>
  new HtmlWebpackPlugin({
    title: projectName || appName,
    template: templ,
    favicon: icon,
    inject: true,
    minify: {
      html5: true,
      collapseWhitespace: true,
      // conservativeCollapse:true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      removeComments: true,
      removeTagWhitespace: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true,
    },
  });

const plugins = [
  htmlPlugin(),
];

const rules = [
  {
    test: /\.m?js/,
    resolve: {
      fullySpecified: false,
    },
  },
  /* {
    test: /\.tsx?$/,
    use: [{loader: 'babel-loader'}, {loader: 'ts-loader'}],
    exclude: [/node_modules/, /draft/],
  },
  {
    test: /\.jsx?$/,
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
    },
    exclude: [/node_modules/, path.resolve(__dirname, 'node')],
  }, */
  {
    test: /\.jsx?$/,
    loader: 'esbuild-loader',
    options: {
      loader: 'jsx',
      target: 'es2018',
      jsx: 'automatic',
      tsconfigRaw: {},
    },
    exclude: [/node_modules/, path.resolve(__dirname, 'node')],
  },
  {
    test: /\.(jpe?g|png|gif|psd|bmp|ico|webp|svg|hdr)$/i,
    loader: 'url-loader',
    options: {
      limit: 20480,
      name: 'img/img_[hash:8].[ext]',
      // publicPath:'../',
      esModule: false,
    },
    type: 'javascript/auto',
    exclude: [/node_modules/],
  },
  {
    test: /\.(ttf|eot|svg|woff|woff2|otf)$/,
    loader: 'url-loader',
    options: {
      limit: 20480,
      name: 'fonts/[hash:8].[ext]',
      publicPath: '../',
      esModule: false,
    },
    exclude: [/images/],
  },
  {
    test: /\.html$/,
    use: {
      loader: 'html-loader',
      options: {
        minimize: true,
      },
    },
    include: [app],
  },
  {
    test: /\.md$/,
    use: [
      {
        loader: 'html-loader',
        options: {
          minimize: false,
        },
      },
    ],
    exclude: [/node_modules/],
  },
  {
    test: /\.pdf$/,
    loader: 'url-loader',
    options: {
      limit: 20480,
      name: 'pdf/[hash].[ext]',
    },
    exclude: [/node_modules/],
  },
  {
    test: /\.(swf|xap|mp4|webm)$/,
    loader: 'url-loader',
    options: {
      limit: 20480,
      name: 'video/[hash].[ext]',
    },
    exclude: [/node_modules/],
  },
  {
    test: /\.(max|glb|gltf|fbx|stl|obj)$/,
    loader: 'url-loader',
    options: {
      limit: 20480,
      name: 'models/[hash].[ext]',
    },
    exclude: [/node_modules/],
  },
];

module.exports = {
  context: app,
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
  experiments: {
    topLevelAwait: true,
    // outputModule:true,
    // syncWebAssembly:true,
    // asyncWebAssembly:true,
    // layers:true,
    // lazyCompilation:true,
  },
  entry: entry,
  output: {
    path: path.resolve(app, BUILD_DIR),
    publicPath: rootDir,
    filename: 'js/[name].js',
  },
  optimization: {
    splitChunks: false,
    minimize: false,
    providedExports: false,
    usedExports: false,
    concatenateModules: false,
    sideEffects: 'flag',
    runtimeChunk: 'single',
    moduleIds: 'named',
    chunkIds: 'named',
  },
  externals: {
    // react:'react',
    // vue:'vue',
  },
  resolve: {
    modules: [app, 'node_modules'],
    alias: {
      '@app': app,
      '@configs': path.resolve(app, '../configs'),
      '@commons': path.resolve(app, '../commons'),
    },
    extensions: ['.jsx', '.js', '.less', '.css', '.ts', '.tsx'],
    fallback: {
      path: false, //require.resolve('path-browserify'),
      fs: false,
      process: false,
    },
    symlinks: false,
    cacheWithContext: false,
  },
  module: {
    rules: rules,
  },
  plugins: plugins,
};
