'use strict';

const mongoose  = require('mongoose');
mongoose.Promise = require('bluebird');

const MessageSchema = new mongoose.Schema({
  to: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  from: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  text: {
    type: String,
    required: true,
    minLength: 3
  }
}, {timestamps: true});

module.exports = mongoose.model('Message', MessageSchema);
