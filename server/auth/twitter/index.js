'use strict';

const express = require('express');
const passport = require('passport');
const setTokenCookie = require('../auth.service').setTokenCookie;
const router = express.Router();

/**
 * @api {get} /auth/twitter Twitter signup/login for user
 * @apiName TwitterSignInUser(signup)
 * @apiGroup Auth
 *
 */
/**
 * @api {get} /auth/twitter/agent Twitter signup/login for user
 * @apiName TwitterSignInAgent(signup)
 * @apiGroup Auth
 *
 */

router
  .get('/', passport.authenticate('twitter', {
    failureRedirect: '/signup',
    session: false
  }))
  .get('/callback', passport.authenticate('twitter', {
    failureRedirect: '/signup',
    session: false
  }), setTokenCookie);

module.exports = router;
