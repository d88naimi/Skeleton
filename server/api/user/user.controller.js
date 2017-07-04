'use strict';

const User = require('./user.model');
const Comment = require('../comment/comment.model');
const config = require('../../config/environment');
const jwt = require('jsonwebtoken');
const md5 = require('md5');


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


module.exports.showAllAgents = (req, res) => {
  return User.find({role: 'agent'}, '-salt -password').exec()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(handleError(res));
}


/**
 * @api {get} /api/users/agents?location=:location&language=:language&page=:page Request Agents list
 * @apiName GetAgentsInfo
 * @apiGroup Agent
 *
 * @apiParam (query params) {String} location (OPTIONAL) Name of city. At least one of location or languate are needed 
 * @apiParam (query params) {String} language (OPTIONAL) Name of language. At least one of location or languate are needed. Should be one of these: ['Chinese', 'Spanish', 'English', 'Hindi', 'Arabic', 'Malay/Indonesian', 'Portuguese', 'Bengali', 'Russian', 'Japanese', 'Korean', 'German','Punjabi/Lahnda', 'Telugu'].
 * @apiParam (query params) {Number} page (OPTIONAL) page of list.. (10 agents per page, default value 0)
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
 *       "_id": "59483862c27e982e0f84c210",
 *       "avgRate": 4.1
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
 *       "_id": "59483dddd86e982e0f84c210",
 *       "avgRate": 4.2
 *     }]
 */
module.exports.showAgents = (req, res) => {
  const location = req.query.location;
  const language = req.query.language;
  const page = +req.query.page || 0;
  let queryObj = {};
  if(location) queryObj.location = decodeURI(location);
  if(language) queryObj.languages = decodeURI(language);
  // if(Object.keys(queryObj).length === 0) return res.status(400).end();
  return User.find(queryObj)
    .skip(page * 10)
    .limit(10)
    .select('-salt -password -provider')    
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
 * @apiParam (request body) {String} password Users password.
 * @apiParam (request body) {String} role (OPTIONAL) "user" or "agent", default is "user"
 * @apiSuccess {String} token json web token.
 *
 */
module.exports.create = (req, res) => {
  const newUser = new User(req.body);
  newUser.provider = 'local';
  newUser.photoURL = `https://gravatar.com/avatar/${md5(newUser.email)}?s=200&d=retro`;

  if(newUser.role !== 'agent') newUser.role = 'user';
  newUser.save()
    .then(function(user) {
      const token = jwt.sign({ _id: user._id, role: user.role }, config.secrets.session, {
        expiresIn: 60 * 60 * 5
      });
      return res.json({ token });
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
 * @apiSuccess {String} photoURL profile photo url
 * @apiSuccess {String} location Name of city,
 * @apiSuccess {String} languages Names of language (array)
 * @apiSuccess {String} text Simple profile text,
 * @apiSuccess {String} phone Phone number,
 * @apiSuccess {String} _id user(agent) unique id,
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "email": "example@example.com",
 *       "facebook": Object,
 *       "name": "John Doe",
 *       "provider": "google",
 *       "role": "agent",
 *       "_id": "59483862c27e982e0f84c210"
 *       "photoURL": "https://sokaspdo.asodkasd.asdasd/soks.jpg"
 *       "location": "San Diego",
 *       "languages": [ "Korean", "Spanish"],
 *       "phone": "858-211-1111",
 *       "text": "I am .......................",
 *       "avgRate": 4.6
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
 * @api {put} /api/users/:id/password Change User Password (restriction: 'authorized')
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
module.exports.changePassword = (req, res, next) => {
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
 *       "provider": "google",
 *       "photoURL": "https://sokaspdo.asodkasd.asdasd/soks.jpg"
 *       "role": "user",
 *       "_id": "59483862c27e982e0f84c210"
 *     }
 */
module.exports.me = (req, res, next) => {
  const userId = req.user._id;


  return User.findOne({ _id: userId }, '-salt -password')
    .exec()
    .then(user => { // don't ever give out the password or salt
      if(!user) {
        return res.status(401).end();
      }

      if(user.myAgent) {
        user.populate('myAgent', '_id photoURL name', function (err, user) {
          return res.json(user);
        })
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

/**
 * @api {put} /api/users/agent/:id Edit Agent infomation (restriction: 'authorized')
 * @apiName EditAgent
 * @apiGroup Agent
 *
 * @apiParam (route params) {String} id (OPTIONAL) Agent's unique ID.
 * @apiParam (request body) {String} name (OPTIONAL) Agent's new name.
 * @apiParam (request body) {Array[String]} languages (OPTIONAL) Agent's languages (Should be an array of these languages: ['Chinese', 'Spanish', 'English', 'Hindi', 'Arabic', 'Malay/Indonesian', 'Portuguese', 'Bengali', 'Russian', 'Japanese', 'Korean', 'German','Punjabi/Lahnda', 'Telugu'].
 * @apiParam (request body) {String} location (OPTIONAL) Agent's city name ('New York City', 'Chicago', 'San Diego')
 * @apiParam (request body) {String} phone (OPTIONAL) Agent's phone number
 * @apiParam (request body) {String} text (OPTIONAL) Agent's introduction text
 * @apiParam (request body) {String} photoURL (OPTIONAL) Agent's photoURL 
 * 
 * @apiSuccess {String} name Name of the Agent(User).
 * @apiSuccess {String} role "user", "agent", "admin".
 * @apiSuccess {String} photoURL profile photo url
 * @apiSuccess {String} location Name of city,
 * @apiSuccess {String} languages JSON.stringify(Array of lanaguageName) ex) "["Korean", "Spanish"]"
 * @apiSuccess {String} text Simple profile text,
 * @apiSuccess {String} phone Phone number,
 * @apiSuccess {String} _id user(agent) unique id, * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "email": "example@example.com",
 *       "facebook": Object,
 *       "name": "John Doe",
 *       "provider": "google",
 *       "role": "agent",
 *       "_id": "59483862c27e982e0f84c210"
 *       "photoURL": "https://sokaspdo.asodkasd.asdasd/soks.jpg"
 *       "location": "San Diego",
 *       "languages": [ "Korean", "Spanish"],
 *       "phone": "858-211-1111",
 *       "text": "I am ......................."
 *     }
 */

module.exports.editAgent = (req, res, next) => {
  const agentId = req.user._id;
  return User.findOne({_id: agentId, role: 'agent'}).exec()
    .then(agent => {  
      const newInfo = req.body;
      if(newInfo.location) agent.location = newInfo.location;
      if(newInfo.languages) agent.languages = JSON.parse(newInfo.languages);
      if(newInfo.phone) agent.phone = newInfo.phone;
      if(newInfo.text) agent.text = newInfo.text;
      if(newInfo.name) agent.name = newInfo.name;
      if(newInfo.photoURL) agent.photoURL = newInfo.photoURL;      
      agent.save()
        .then(updatedAgent => {
          let agent = updatedAgent.toObject();
          Reflect.deleteProperty(agent, 'salt');
          Reflect.deleteProperty(agent, 'password');
          return res.json(agent);
        })
        .catch(err => next(err));
    });
};

/**
 * @api {put} /api/users/:id Edit User infomation (restriction: 'authorized')
 * @apiName EditUser
 * @apiGroup Users
 *
 * @apiParam (route params) {String} id (OPTIONAL) User's unique ID.
 * @apiParam (request body) {String} name (OPTIONAL) User's new name.
 * @apiParam (request body) {Array[String]} languages (OPTIONAL) User's languages (Should be an array of these languages: ['Chinese', 'Spanish', 'English', 'Hindi', 'Arabic', 'Malay/Indonesian', 'Portuguese', 'Bengali', 'Russian', 'Japanese', 'Korean', 'German','Punjabi/Lahnda', 'Telugu'].
 * @apiParam (request body) {String} location (OPTIONAL) User's city name ('New York City', 'Chicago', 'San Diego')
 * @apiParam (request body) {String} phone (OPTIONAL) User's phone number
 * @apiParam (request body) {String} text (OPTIONAL) User's introduction text
 * @apiParam (request body) {String} photoURL (OPTIONAL) User's photoURL 
 * @apiParam (request body) {String} myAgent (OPTIONAL) id of User's selected Agent
 *
 * @apiSuccess {String} name Name of the Agent(User).
 * @apiSuccess {String} role "user", "agent", "admin".
 * @apiSuccess {String} photoURL profile photo url
 * @apiSuccess {String} location Name of city,
 * @apiSuccess {String} languages JSON.stringify(Array of lanaguageName) ex) "["Korean", "Spanish"]"
 * @apiSuccess {String} text Simple profile text,
 * @apiSuccess {String} phone Phone number,
 * @apiSuccess {String} _id user(agent) unique id, * 
 * @apiSuccess {String} myAgent agent object ex) {_id: '59483862c27e982e0f84c210', name: 'Hyungwu Pae', photoURL: "https://sokaspdo.asodkasd.asdasd/soks.jpg"}
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "email": "example@example.com",
 *       "facebook": Object,
 *       "name": "John Doe",
 *       "provider": "google",
 *       "role": "agent",
 *       "_id": "59483862c27e982e0f84c210"
 *       "photoURL": "https://sokaspdo.asodkasd.asdasd/soks.jpg"
 *       "location": "San Diego",
 *       "languages": [ "Korean", "Spanish"],
 *       "phone": "858-211-1111",
 *       "text": "I am .......................",
 *       "myAgent": {
 *          _id: "59483862c27e982e0f84c210",
 *          name: 'Jack Doe',
 *          photoURL: 'https://.........'
 *       }
 *     }
 */

module.exports.editUser = (req, res, next) => {
  const userId = req.user._id;
  return User.findById(userId).exec()
    .then(user => {  
      const newInfo = req.body;
      if(newInfo.location) user.location = newInfo.location;
      if(newInfo.languages) user.languages = JSON.parse(newInfo.languages);
      if(newInfo.phone) user.phone = newInfo.phone;
      if(newInfo.text) user.text = newInfo.text;
      if(newInfo.name) user.name = newInfo.name;
      if(newInfo.photoURL) user.photoURL = newInfo.photoURL;      
      if(newInfo.myAgent) user.myAgent = newInfo.myAgent;
      user.save()
        .then(updatedUser => {
          if(updatedUser.myAgent) {
            updatedUser.populate('myAgent', '_id name photoURL', function (err, user) {
              let updatedUser = user.toObject();
              Reflect.deleteProperty(updatedUser, 'salt');
              Reflect.deleteProperty(updatedUser, 'password');
              return res.json(updatedUser);
            });
          } else {
            let user = updatedUser.toObject();
            Reflect.deleteProperty(user, 'salt');
            Reflect.deleteProperty(user, 'password');
            return res.json(user);
          }
        })
        .catch(err => next(err));
    });
};


