'use strict';

const express = require('express');
const passport = require('passport');
const signToken = require('../auth.service').signToken;
const router = express.Router();

/**
 * @api {post} /auth/local Local signup for user/agent
 * @apiName LocalSignIn
 * @apiGroup Auth
 *
 * @apiParam (request body) {String} email Users email.
 * @apiParam (request body) {String} password Users password.
 */
router.post('/', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    const error = err || info;
    if(error) {
      return res.status(401).json(error);
    }
    if(!user) {
      return res.status(404).json({message: 'Something went wrong, please try again.'});
    }

    const token = signToken(user._id, user.role);
    res.json({ token });
  })(req, res, next);
});

module.exports = router;
