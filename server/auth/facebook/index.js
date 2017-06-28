'use strict';

const express = require('express');
const passport = require('passport');
const setTokenCookie = require('../auth.service').setTokenCookie;
const router = express.Router();

/**
 * @api {get} /auth/facebook Facebook signup/login for user
 * @apiName FacebookSignInForUser(signup)
 * @apiGroup Auth
 *
 */


/**
 * @api {get} /auth/facebook/agent Facebook signup/login for agent
 * @apiName FacebookSignInForAgent(signup)
 * @apiGroup Auth
 *
 */
router
  .get('/', passport.authenticate('facebook', {
    scope: ['email', 'user_about_me'],
    failureRedirect: '/signup',
    session: false
  }))
  .get('/callback', passport.authenticate('facebook', {
    failureRedirect: '/signup',
    session: false
  }), setTokenCookie);

module.exports = router;
