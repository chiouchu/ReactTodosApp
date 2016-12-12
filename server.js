const path = require('path');
const webpack = require('webpack');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

// change webconfig for hot reload
const config = require('./webpack.config');
const webpackConfig = Object.create(config);
webpackConfig.entry = [
    'webpack-hot-middleware/client?reload=true',
    './src/index.js'
];
webpackConfig.output = {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/'
};

// express
const app = express();
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
	publicPath: webpackConfig.output.publicPath,
    noInfo: true,
    stats: {
        colors: true
   	}
}));
app.use(webpackHotMiddleware(compiler));
app.get('*', function(req, res) {
    // use index.html
    res.sendFile(__dirname + '/index.html');
});

// listen port
app.listen(8080, function(error) {
    if (error) {
        console.error(error);
    } else {
        console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', 8080, 8080);
    }
});
