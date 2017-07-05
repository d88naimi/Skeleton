/**
 * Main application routes
 */

'use strict';

const errors = require('./components/errors');
const path = require('path');
const project = require('../project.config');
const compiler = require('./config/compiler');
const config = require('./config/environment');

module.exports = function(app) {

  app.use('/api/comments', require('./api/comment'));
  app.use('/api/users', require('./api/user'));
  app.use('/api/photo', require('./api/photo'));
  app.use('/api/messages', require('./api/message'));
  app.use('/api/chatrooms', require('./api/chatroom'));

  app.use('/auth', require('./auth'));


  // All other routes should redirect to the index.html
  app.use('*', function (req, res, next) {
    const filename = path.join(compiler.outputPath, 'index.html');
    if (project.env === 'development') {
      compiler.outputFileSystem.readFile(filename, (err, result) => {
        if (err) {
          return next(err);
        }
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
      });
    }
    else {
      res.sendFile(filename);
    }

  });

};
