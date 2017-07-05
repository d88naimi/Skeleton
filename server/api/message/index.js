'use strict';

const express = require('express');
const controller = require('./message.controller');
const router = express.Router();
const auth = require('../../auth/auth.service');

router.get('/:roomId', auth.isAuthenticated(), controller.showMessagesOfRoom);
router.post('/:roomId', auth.isAuthenticated(), controller.create);
// router.delete('/:id', auth.isAuthenticated(), controller.destroy);

module.exports = router;
