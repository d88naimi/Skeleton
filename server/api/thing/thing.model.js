'use strict';

const mongoose  = require('mongoose');
mongoose.Promise = require('bluebird');

const ThingSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Thing', ThingSchema);
