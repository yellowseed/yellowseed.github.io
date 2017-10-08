var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './docs/'),
    publicPath: '/',
    filename: './docs/build.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
                  use: [{
                      loader: "style-loader"
                  }, {
                      loader: "css-loader"
                  }, {
                      loader: "sass-loader"
                  }]
      },
      {
       test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
       use: [{
         loader: 'file-loader',
         options: {
           name: '[name].[ext]',
           outputPath: 'fonts/'    // where the fonts will go
         }
       }]
     },
      {
        test: /\.html$/,
        use: [ 'html-loader' ]
      },
      {
        test: /\.css$/,
        use: [ 'css-loader' ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
              test: /\.(jpe?g|png|gif|svg)$/i,
              loaders: ['file-loader?context=src/images&name=images/[name].[ext]', {
                loader: 'image-webpack-loader',
                query: {
                  mozjpeg: {
                    progressive: true,
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                  optipng: {
                    optimizationLevel: 4,
                  },
                  pngquant: {
                    quality: '75-90',
                    speed: 3,
                  },
                },
              }],
              exclude: /node_modules/,
              include: __dirname,
            }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'src')
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
