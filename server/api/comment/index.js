'use strict';

const express = require('express');
const controller = require('./comment.controller');
const router = express.Router();
const auth = require('../../auth/auth.service');

router.get('/agent/:agentId', controller.index);
router.get('/:id', controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id', auth.isAuthenticated(), controller.update);
router.delete('/:id', auth.isAuthenticated(), controller.destroy);

module.exports = router;
