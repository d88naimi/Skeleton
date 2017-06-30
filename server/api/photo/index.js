const express = require('express');
const router = express.Router();
const controller = require('./photo.controller');
const auth = require('../../auth/auth.service');

router.get('/s3-signed-req', auth.isAuthenticated(), controller.getSignedRequest);
module.exports = router;