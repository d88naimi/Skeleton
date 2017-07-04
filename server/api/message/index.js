'use strict';

const express = require('express');
const controller = require('./message.controller');
const router = express.Router();
const auth = require('../../auth/auth.service');

router.get('/', auth.isAuthenticated(), controller.showAllMyMessages);
router.get('/:from', auth.isAuthenticated(), controller.showMessagesWith);
router.post('/', auth.isAuthenticated(), controller.create);
// router.delete('/:id', auth.isAuthenticated(), controller.destroy);

module.exports = router;
