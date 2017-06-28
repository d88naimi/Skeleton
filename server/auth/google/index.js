'use strict';

const express = require('express');
const passport = require('passport');
const setTokenCookie = require('../auth.service').setTokenCookie;
const router = express.Router();
/**
 * @api {get} /auth/google Google signup/login for user
 * @apiName GoogleSignInForUser(signup)
 * @apiGroup Auth
 *
 */

/**
 * @api {get} /auth/google/agent Google signup/login for user
 * @apiName GoogleSignInForAgent(signup)
 * @apiGroup Auth
 *
 */
router
  .get('/', passport.authenticate('google', {
    failureRedirect: '/signup',
    scope: [
      'profile',
      'email'
    ],
    session: false
  }));

router
  .get('/agent', passport.authenticate('google-agent', {
    failureRedirect: '/signup',
    scope: [
      'profile',
      'email'
    ],
    session: false
  }));

router.get('/callback', passport.authenticate('google', {
  failureRedirect: '/signup',
  session: false
}), setTokenCookie);

router.get('/agent/callback', passport.authenticate('google-agent', {
  failureRedirect: '/signup',
  session: false
}), setTokenCookie);


module.exports = router;

