'use strict';

const mongoose  = require('mongoose');
mongoose.Promise = require('bluebird');

const ChatroomSchema = new mongoose.Schema({
  user1: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  user2: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  latestMessage: {
    type: String
  }
}, {timestamps: true});

module.exports = mongoose.model('Chatroom', ChatroomSchema);
