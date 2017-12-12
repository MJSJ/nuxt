const env = require('./env').env
module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = './server/index.js'


    config.module = {
      loaders: [{
        test: /\.(es6|js)$/,
        use: [{
            loader: 'babel-loader',
            options: {
                cacheDirectory: env == "dev"
            }
        }],
        // exclude: /node_modules\/(?!mjsj-api)/
      }, {
        test: /\.css$/,
        loader:  'style!css?-restructuring!postcss'
      }, {
        test: /\.less$/,
        loader: 'style!css!postcss!less'
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url?limit=25000'
      }, {
        test: /\.woff|ttf|woff2|eot$/,
        loader: 'url?limit=100000'
      }]
    }

    return config
  }
}
