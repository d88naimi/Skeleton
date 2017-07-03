require('dotenv').config();
const express = require('express');
const path = require('path');
const webpackConfig = require('../build/webpack.config');
const compiler = require('./config/compiler');
// const compress = require('compression');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/environment');
const http = require('http');
const chalk = require('chalk');
const server = http.createServer(app);
const io = require('socket.io')(server);
const project = require('../project.config');

// app.use(compress());
app.set('port', process.env.PORT || 3000);

//middleware for use of socket.io
app.use(function(req, res, next){
  res.io = io;
  next();
});

/**
 * Connect to MongoDB.
 */
mongoose.Promise = global.Promise;
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});


/**
 * Apply Webpack HMR Middleware
 */
if (project.env === 'development') {
  console.log('Enabling webpack development and HMR middleware');
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: path.resolve(project.basePath, project.srcDir),
    hot: true,
    quiet: false,
    noInfo: false,
    lazy: false,
    stats: 'normal',
  }));
  app.use(require('webpack-hot-middleware')(compiler, {
    path: '/__webpack_hmr'
  }));
}

require('./config/express')(app);
app.use(express.static(path.resolve(project.basePath, project.outDir)));
require('./routes')(app);


/**
 * Server start
 */
console.log('%s Starting server...', chalk.green('✓'))
server.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});

/**
 * Socket.io
 */
io.on('connection', function(socket){
  console.log('%s client connected', chalk.green('✓'));

  socket.on('room', function(id) {
    console.log("ROOM %s was made!!!", id);
    socket.join(id);
  });

  socket.on('disconnect', () => {
    console.log('%s client disconnected', chalk.red('✗'));
  });

  // socket.on('')
});

module.exports = app;
