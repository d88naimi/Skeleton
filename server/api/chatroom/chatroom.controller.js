'use strict';

const jsonpatch = require('fast-json-patch')
const Chatroom = require('./chatroom.model');
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


module.exports.showMyChatRooms = (req, res) => {
  const user = req.user;

  return Chatroom.find({$or:[ {user1: user._id},{user2: user._id} ]})
    .populate('user1', '_id name photoURL')
    .populate('user2', '_id name photoURL')
    .exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
};




module.exports.create = (req, res) => {
  req.body.user1 = req.user._id;

  return Chatroom.create(req.body)
    .then(room => {
      room
        .populate('user1', '_id name photoURL')
        .populate('user2', '_id name photoURL', (err, room) => {
          // console.log(room);
          res.io.sockets.in(room.user2._id).emit('roomCreated', room);
          res.status(201).json(room);
        });
    })
    .catch(handleError(res)); 
};