const Encore = require('@symfony/webpack-encore');
const Webpack = require('webpack');

Encore
	.enableSingleRuntimeChunk()

	// the project directory where all compiled assets will be stored
	.setOutputPath('web/assets/build/css/')

	// the public path used by the web server to access the previous directory
	.setPublicPath('/assets/build/css')

	// checkout bundle
	.addEntry('test', './assets/css/test.scss')

	// enable source maps during development
	.enableSourceMaps(!Encore.isProduction())

	// empty the outputPath dir before each build
	.cleanupOutputBeforeBuild()

	// allow sass/scss files to be processed
	.enableSassLoader()

    // to use with symfony webpack bundle
	.splitEntryChunks()
;

const test = Encore.getWebpackConfig();
test.name = 'test';
Encore.reset();

module.exports = [test];
