const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports.setup = (User, config) => {
  passport.use('google', new GoogleStrategy({
    clientID: config.google.clientID,
    clientSecret: config.google.clientSecret,
    callbackURL: config.google.callbackURL,
    passReqToCallback: true
  },
  function(req, accessToken, refreshToken, profile, done) {
    User.findOne({'google.id': profile.id}).exec()
      .then(user => {
        if(user) {
          done(null, user);
          return null;
        }
        user = new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          role: 'user',
            photoURL: profile.image ? profile.image.url : (profile._json.image? profile._json.image.url: 'https://gravatar.com/avatar/07759404e0e350b4c6754b8c1b3edcb8?s=200&d=retro'),
          username: profile.emails[0].value.split('@')[0],
          provider: 'google',
          google: profile._json,
        });
        user.save()
          .then(savedUser => done(null, savedUser))
          .catch(err => done(err));
      })
      .catch(err => done(err));
  }));

  passport.use('google-agent', new GoogleStrategy({
    clientID: config.google.clientID,
    clientSecret: config.google.clientSecret,
    callbackURL: config.google.callbackURLForAgent,
    passReqToCallback: true
  },
  function(req, accessToken, refreshToken, profile, done) {
    User.findOne({'google.id': profile.id}).exec()
      .then(agent => {
        if(agent) {
          done(null, agent);
          return null;
        }
        agent = new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          role: 'agent',
          photoURL: profile.photos[0].value,
          username: profile.emails[0].value.split('@')[0],
          provider: 'google',
          google: profile._json,
        });
        agent.save()
          .then(savedAgent => done(null, savedAgent))
          .catch(err => done(err));
      })
      .catch(err => done(err));
  }));

};
