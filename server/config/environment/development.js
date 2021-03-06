'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: process.env.MONGODB_URI
  
  // uri: 'mongodb://127.0.0.1:27017/tunited'
  },

  // Seed database on startup
  seedDB: false

};
