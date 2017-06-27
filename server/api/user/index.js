'use strict';
const express = require('express');
const router = express.Router();
const controller = require('./user.controller');
const auth = require('../../auth/auth.service');

//get list of user(agent)
router.get('/', auth.hasRole('admin'), controller.index);
router.get('/agents', controller.showAgents);

//get single user(agent)
router.get('/me', auth.isAuthenticated(), controller.me);
router.get('/:id', controller.showUser);
router.get('/agent:id', controller.showAgent);

router.put('/:id', auth.isAuthenticated(), controller.editUser);
router.put('/agent/:id', auth.isAuthenticated(), controller.editAgent);
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.post('/', controller.create);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);

module.exports = router;
