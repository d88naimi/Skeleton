'use strict';

const Message = require('./message.model');
const User = require('../user/user.model');
const Chatroom = require('../chatroom/chatroom.model');

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
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
 * @api {get} /api/messages/:roomId Request messages with a specific user
 * @apiName GetMessagesOfRoom
 * @apiGroup Message
 *
 * @apiParam (route params) {String} roomId Unique ID of chat room.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "from": "59483862c27e982e0e67f987",
 *       "to": "59483862c27e982e0e67f987",
 *       "text": "Hello",
 *       "room": "59483862c27e982e0e67f987",
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
module.exports.showMessagesOfRoom = (req, res) => {
  // const user = req.user;
  const roomId = req.params.roomId;
  //TODO: check if the user is a member of this room
  return Message.find({room: roomId})
    .lean()
    .exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
};



/**
 * @api {post} /api/messages/:roomId Send a message (restriction: authenticated)
 * @apiName SendMessage
 * @apiGroup Message
 *
 * @apiParam (request body) {String} to id of receiver
 * @apiParam (request body) {String} text message text

 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "from": "59483862c27e982e0e67f987",
 *       "to": "59483862c27e982e0e67f987",
 *       text: "Hello. This is an example comment",
 *       room: "59483862c27e982e0e67f987",
 *       createdAt:
 *       updatedAt:
 *     }
 */
// Send a Message
module.exports.create = (req, res) => {
  req.body.from = req.user._id;
  req.body.room = req.params.roomId;

  return Message.create(req.body)
    .then(message => {
      res.io.sockets.in(message.to).emit('receiveMsg', message);
      Chatroom.findById(message.room)
        .exec()
        .then(room => {
          room.latestMessage = message.text;
          room.save();
        });
      res.status(201).json(message);
    })
    .catch(handleError(res));
};