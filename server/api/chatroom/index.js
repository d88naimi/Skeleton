'use strict';

const express = require('express');
const controller = require('./chatroom.controller');
const router = express.Router();
const auth = require('../../auth/auth.service');

router.get('/', auth.isAuthenticated(), controller.showMyChatRooms);
router.post('/', auth.isAuthenticated(), controller.create);

module.exports = router;
