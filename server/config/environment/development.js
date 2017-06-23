'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    // uri: process.env.MONGOLAB_URI
    uri: 'mongodb://127.0.0.1:27017/viip'    
  },

  // Seed database on startup
  seedDB: false

};
