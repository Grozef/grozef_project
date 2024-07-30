const Encore = require('@symfony/webpack-encore');
const HtmlWebpackPlugin = require('html-webpack-plugin');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .addEntry('app', './assets/app.js')
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableSingleRuntimeChunk()
    .enableSassLoader()
    .autoProvidejQuery() // Si vous utilisez jQuery
    .addPlugin(new HtmlWebpackPlugin({
        template: './assets/index.html',
        minify: false
    }))
;

module.exports = Encore.getWebpackConfig();
