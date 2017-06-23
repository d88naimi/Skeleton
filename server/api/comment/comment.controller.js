'use strict';

const jsonpatch = require('fast-json-patch')
const Comment = require('./comment.model');

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
  };
}

/**
 * @api {get} /api/comments/agent/:agentId?page=:page Request Comment List of an Agent
 * @apiName GetCommentListOfAgent
 * @apiGroup Comment
 *
 * @apiParam (query params) {Number} page Page number(integer). Default value is 0
 * @apiParam (route params) {String} agentId Agent(User) unique ID.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "agentId": "59483862c27e982e0f84c210",
 *       "author": {
 *          _id: "59483862c27e982e0f84c210",
 *          name: "John Doe"
 *       },
 *       text: "Hello. This is an example comment",
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
module.exports.index = (req, res) => {
  const page = +req.query.page || 0;
  return Comment.find(req.params.agentId)
    .skip(page * 10)
    .limit(10)
    .exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
};


/**
 * @api {get} /api/comments/:id Request a single comment
 * @apiName GetSingleComment
 * @apiGroup Comment
 *
 * @apiParam (route params) {String} id Comment Unique ID.
 *
 * @apiSuccess {Object} comment comment object
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "agentId": "59483862c27e982e0f84c210",
 *       "author": {
 *          _id: "59483862c27e982e0f84c210",
 *          name: "John Doe"
 *       },
 *       text: "Hello. This is an example comment",
 *       createdAt:
 *       updatedAt:
 *     },
 *
 */
module.exports.show = (req, res) => {
  return Comment.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
};



/**
 * @api {post} /api/comments Create a Comment (restriction: authenticated)
 * @apiName PostComment
 * @apiGroup Comment
 *
 * @apiParam (request body) {String} agentId Agent(User) unique ID.
 * @apiParam (request body) {String} text comment text
 * @apiParam (request body) {String} rate star rate (integer from 0 to 5)
 *
 * @apiSuccess {Object} comment comment object
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "agentId": "59483862c27e982e0f84c210",
 *       "author": {
 *          _id: "59483862c27e982e0f84c210",
 *          name: "John Doe"
 *       },
 *       text: "Hello. This is an example comment",
 *       rate: 3
 *       createdAt:
 *       updatedAt:
 *     }
 */
// Creates a new Comment in the DB
module.exports.create = (req, res) => {
  const author = {
    _id: req.user._id,
    name: req.user.name
  };
  req.body.author = author;

  return Comment.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
};


/**
 * @api {put} /api/comments Update a Comment (restriction: authenticated)
 * @apiName UpdateComment
 * @apiGroup Comment
 *
 * @apiParam (route params) {String} id Comment unique ID.
 * @apiParam (request body) {String} agentId (Optional) Agent(User) unique ID.
 * @apiParam (request body) {String} text (Optional) comment text
 * @apiParam (request body) {String} rate (Optional) star rate (integer from 0 to 5)
 *
 * @apiSuccess {Object} comment comment object

 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "agentId": "59483862c27e982e0f84c210",
 *       "author": {
 *          _id: "59483862c27e982e0f84c210",
 *          name: "John Doe"
 *       },
 *       text: "Hello. This is an example comment",
 *       rate: 3
 *       createdAt:
 *       updatedAt:
 *     }
 */
// Updates an existing Comment in the DB
module.exports.update = (req, res) => {
  if(req.body._id) {
    Reflect.deleteProperty(req.body, '_id');
  }
  return Comment.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
};


/**
 * @api {delete} /api/comments/:id Delete a Comment (restriction: authenticated)
 * @apiName DeleteComment
 * @apiGroup Comment
 *
 * @apiParam (route params) {String} id Comment unique ID.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 204 OK
 */
// Deletes a Comment from the DB
module.exports.destroy = (req, res) => {
  return Comment.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
};
