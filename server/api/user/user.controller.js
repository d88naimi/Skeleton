'use strict';

const User = require('./user.model');
const config = require('../../config/environment');
const jwt = require('jsonwebtoken');

function validationError(res, statusCode) {
  statusCode = statusCode || 422;
  return function(err) {
    return res.status(statusCode).json(err);
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    return res.status(statusCode).send(err);
  };
}

/**
 * @api {get} /api/users/ Request All User List (restriction: 'admin')
 * @apiName GetAllUser
 * @apiGroup Users
 *
 *
 * @apiSuccess {Array} Object array of user Object.
 *
 */
module.exports.index = (req, res) => {
  return User.find({}, '-salt -password').exec()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(handleError(res));
};


/**
 * @api {get} /api/users/agents?location=:location&language=:language&page=:page Request Agents list
 * @apiName GetAgentsInfo
 * @apiGroup Agent
 *
 * @apiParam (query params) {String} location Name of city.
 * @apiParam (query params) {String} language Name of language. Should be one of these: ['Chinese', 'Spanish', 'English', 'Hindi', 'Arabic', 'Malay/Indonesian', 'Portuguese', 'Bengali', 'Russian', 'Japanese', 'Korean', 'German','Punjabi/Lahnda', 'Javanese', 'Telugu'].
 * @apiParam (query params) {Number} page (OPTIONAL)page of list.. (10 agents per page, default value 0)
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "name": "John Doe",
 *       "role": "agent",
 *       "location": "San Diego",
 *       "languages": [ "Spanish", "Korean", ...],
 *       "text": "I am from Korea and live here 30 years. I am good at searching a good apartment."
 *       "phone": "213-378-2134"
 *       "_id": "59483862c27e982e0f84c210"
 *     },
 *      ...
 *      ...
 *     {
 *       "name": "Jane Doe",
 *       "role": "agent",
 *       "location": "San Diego",
 *       "languages": [ "Spanish", "Korean", ...],
 *       "text": "I am from Spain and live here 30 years. I am good at searching a good apartment."
 *       "phone": "213-221-2134"
 *       "_id": "59483dddd86e982e0f84c210"
 *     }]
 */
module.exports.showAgents = (req, res) => {
  const location = req.query.location;
  const language = req.query.language;
  const page = +req.query.page;

  return User.find({location, language, role: 'agent'})
    .skip(page * 10)
    .limit(10)
    .lean()
    .exec()
    .then(agents => {
      res.status(200).json(agents);
    })
    .catch(handleError(res));
};




/**
 * @api {post} /api/users Create User
 * @apiName Create User or Agent
 * @apiGroup Users
 *
 * @apiParam (request body) {String} name User name.
 * @apiParam (request body) {String} email Users email.
 * @apiParam (request body) {String} password Users email.
 * @apiParam (request body) {String} role (OPTIONAL) "user" or "agent", default is "user"
 * @apiSuccess {String} token json web token.
 *
 */
module.exports.create = (req, res) => {
  const newUser = new User(req.body);
  newUser.provider = 'local';
  if(newUser.role !== 'agent') newUser.role = 'user';
  newUser.save()
    .then(function(user) {
      const token = jwt.sign({ _id: user._id, role: user.role }, config.secrets.session, {
        expiresIn: 60 * 60 * 5
      });
      res.json({ token });
    })
    .catch(validationError(res));
};

/**
 * @api {get} /api/users/:id Request User's own information
 * @apiName GetUserInfo
 * @apiGroup Users
 *
 * @apiParam (route params) {String} id Users unique ID.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "name": "John Doe",
 *       "role": "user",
 *       "location": "San Diego",
 *       "_id": "59483862c27e982e0f84c210"
 *     }
 */
module.exports.showUser = (req, res, next) => {
  const userId = req.params.id;

  return User.findById(userId).exec()
    .then(user => {
      if(!user) {
        return res.status(404).end();
      }
      res.json(user.profile);
    })
    .catch(err => next(err));
};


/**
 * @api {get} /api/users/agent/:id Request a single agent's information
 * @apiName GetAgentInfo
 * @apiGroup Agent
 *
 * @apiParam (route params) {String} id User's(Agent's) unique ID.
 *
 * @apiSuccess {String} name Name of the Agent(User).
 * @apiSuccess {String} role "user", "agent", "admin".
 * @apiSuccess {String} location Name of city,
 * @apiSuccess {String} languages Names of language (array)
 * @apiSuccess {String} text Simple profile text,
 * @apiSuccess {String} phone Phone number,
 * @apiSuccess {String} _id user(agent) unique id,
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "name": "John Doe",
 *       "role": "agent",
 *       "location": "San Diego",
 *       "languages": [ "Spanish", "Korean", ...],
 *       "text": "I am from Korea and live here 30 years. I am good at searching a good apartment."
 *       "phone": "213-378-2134"
 *       "_id": "59483862c27e982e0f84c210"
 *     }
 */
module.exports.showAgent = (req, res, next) => {
  const agentId = req.params.id;

  return User.findOne({_id: agentId, role: 'agent'}).exec()
    .then(agent => {
      if(!agent) {
        return res.status(404).end();
      }
      res.json(agent.agentProfile);
    })
    .catch(err => next(err));
};



/**
 * @api {delete} /api/users/:id Request User's own information (restriction: 'admin')
 * @apiName DeleteUser
 * @apiGroup Users
 *
 * @apiParam (route params) {String} id Users unique ID.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 204 OK
 */
module.exports.destroy = (req, res) => {
  return User.findByIdAndRemove(req.params.id).exec()
    .then(function() {
      res.status(204).end();
    })
    .catch(handleError(res));
};

/**
 * @api {put} /api/users/:id/password Change User Password
 * @apiName ChangePassword
 * @apiGroup Users
 *
 * @apiParam (route params) {String} id Users unique ID.
 * @apiParam (request body) {String} oldPassword Users old password.
 * @apiParam (request body) {String} newPassword Users new password.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 204 OK
 */
module.exports.changePassword = (req, res) => {
  const userId = req.user._id;
  const oldPass = String(req.body.oldPassword);
  const newPass = String(req.body.newPassword);

  return User.findById(userId).exec()
    .then(user => {
      if(user.authenticate(oldPass)) {
        user.password = newPass;
        return user.save()
          .then(() => {
            res.status(204).end();
          })
          .catch(validationError(res));
      } else {
        return res.status(403).end();
      }
    });
};


/**
 * @api {get} /api/users/me Request User's own information (restriction: 'authorized')
 * @apiName GetMyInfo
 * @apiGroup Users
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "email": "example@example.com",
 *       "google": Object,
 *       "name": "John Doe",
 *       "profiver": "google",
 *       "role": "user",
 *       "_id": "59483862c27e982e0f84c210"
 *       "location": "San Diego",
 *       "isAgent": false
 *     }
 */
module.exports.me = (req, res, next) => {
  const userId = req.user._id;

  return User.findOne({ _id: userId }, '-salt -password').exec()
    .then(user => { // don't ever give out the password or salt
      if(!user) {
        return res.status(401).end();
      }
      return res.json(user);
    })
    .catch(err => next(err));
};

// /**
//  * Authentication callback
//  */
// module.exports.authCallback = (req, res) => {
//   res.redirect('/');
// };


