'use strict';

const mongoose  = require('mongoose');
mongoose.Promise = require('bluebird');

const CommentSchema = new mongoose.Schema({
  agentId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  author: {
    _id: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true
    },
    name: {
      type: String,
      required: true
    },
    photoURL: {
      type: String,
      required: true
    }
  },
  text: {
    type: String,
    required: true,
    minLength: 10
  },
  rate: {
    type: Number,
    default: 3
  }
}, {timestamps: true});

module.exports = mongoose.model('Comment', CommentSchema);
