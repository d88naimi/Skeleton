'use strict';

const jsonpatch = require('fast-json-patch')
const Message = require('./message.model');
const User = require('../user/user.model');

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function patchUpdates(patches) {
  return function(entity) {
    try {
      // eslint-disable-next-line prefer-reflect
      jsonpatch.apply(entity, patches, /*validate*/ true);
    } catch(err) {
      return Promise.reject(err);
    }

    return entity.save();
  };
}

function removeEntity(res) {
  return function(entity) {
    if(entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if(!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
    return null;
  };
}

/**
 * @api {get} /api/messages Request all messages received (restriction: authenticated)
 * @apiName GetAllMessagesReceived
 * @apiGroup Message
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "to": {
 *          _id: "59483862c27e982e0e67f987",
 *          name: "Jack Cat",
 *          photoURL: "https://www.google.com/images/image.jpg"
 *       },
 *       "from": {
 *          _id: "59483862c27e982e0e67f987",
 *          name: "Jane Cow",
 *          photoURL: "https://www.google.com/images/image.jpg"
 *       },
 *       "text": "Hello",
 *       createdAt:
 *       updatedAt:
 *     },
 *     ...
 *     ...
 *     {
 *       ...
 *     }]
 *
 */
module.exports.showAllMyMessages = (req, res) => {
  const user = req.user;

  return Message.find({$or:[ {to: user._id},{from: user._id} ]})
    .populate('from', '_id name photoURL')
    .populate('to', '_id name photoURL')
    .exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
};


/**
 * @api {get} /api/messages/:with Request messages from a specific user
 * @apiName GetMessagesWith
 * @apiGroup Message
 *
 * @apiParam (route params) {String} with Unique ID of opponent.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "to": {
 *          _id: "59483862c27e982e0e67f987",
 *          name: "Jack Cat",
 *          photoURL: "https://www.google.com/images/image.jpg"
 *       },
 *       "from": {
 *          _id: "59483862c27e982e0e67f987",
 *          name: "Jane Cow",
 *          photoURL: "https://www.google.com/images/image.jpg"
 *       },
 *       "text": "Hello",
 *       createdAt:
 *       updatedAt:
 *     },
 *     ...
 *     ...
 *     {
 *       ...
 *     }]
 *
 */
module.exports.showMessagesWith = (req, res) => {
  const user = req.user;

  return Message.find({$or: [{to: user._id, from: req.params.from}, {from: user._id, to: req.params.from}]})
    .populate('from', '_id name photoURL')
    .populate('to', '_id name photoURL')
    .exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
};



/**
 * @api {post} /api/messages Create a Comment (restriction: authenticated)
 * @apiName SendMessage
 * @apiGroup Message
 *
 * @apiParam (request body) {String} to id of receiver
 * @apiParam (request body) {String} text message text

 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "to": {
 *          _id: "59483862c27e982e0e67f987",
 *          name: "Jack Cat",
 *          photoURL: "https://www.google.com/images/image.jpg"
 *       },
 *       "from": {
 *          _id: "59483862c27e982e0e67f987",
 *          name: "Jane Cow",
 *          photoURL: "https://www.google.com/images/image.jpg"
 *       },
 *       text: "Hello. This is an example comment",
 *       createdAt:
 *       updatedAt:
 *     }
 */
// Send a Message
module.exports.create = (req, res) => {
  const from = req.user._id;
  req.body.from = from;

  return Message.create(req.body)
    .then(message => {
      message
        .populate('from', '_id name photoURL')
        .populate('to', '_id name photoURL', (err, msg) => {
          res.io.sockets.in(msg.to._id).emit('receiveMsg', msg);
          res.status(201).json(msg);
        });
    })
    .catch(handleError(res)); 
};