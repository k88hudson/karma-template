module.exports = function (config) {
  config.set({
    singleRun: true,
    browsers: ['Firefox'],
    frameworks: ['mocha'],
    reporters: ['mocha'],
    files: [
      'tests/**/*.js'
    ],
    preprocessors: {
     'tests/**/*.js': ['webpack', 'sourcemap']
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [{
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel'
        }]
      }
    },
    webpackMiddleware: {
      noInfo: true
    }
  });
};


