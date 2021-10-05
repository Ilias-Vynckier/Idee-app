const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
    entry: {
        index: './src/index.js',
      },
      plugins: [
        new HtmlWebpackPlugin({
            title: 'Progressive Web Application',
        }),
          new WorkboxPlugin.InjectManifest({
              swSrc:'./src/sw.js',
          }),
          new WebpackPwaManifest({
            name: 'Idee app',
            short_name: 'Idee',
            description: 'My awesome Progressive Web App!',
            background_color: '#ffffff',
            crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
            publicPath: './',
            icons: [
                {
                  src: path.resolve('./src/chicken.png'),
                  sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
                },
                {
                  src: path.resolve('./src/chicken.png'),
                  size: '1024x1024' // you can also use the specifications pattern
                },
                {
                  src: path.resolve('./src/chicken.png'),
                  size: '1024x1024',
                  purpose: 'maskable'
                }
              ]
           
          })
      ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean:true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};