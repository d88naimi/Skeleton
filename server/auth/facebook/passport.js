const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

module.exports.setup = (User, config) => {
  passport.use('facebook', new FacebookStrategy({
    clientID: config.facebook.clientID,
    clientSecret: config.facebook.clientSecret,
    callbackURL: config.facebook.callbackURL,
    profileFields: [
      'displayName',
      'emails'
    ]
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne({'facebook.id': profile.id}).exec()
      .then(user => {
        if(user) {
          done(null, user);
          return null;
        }

        user = new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          role: 'user',
          photoURL: profile.photos[0].value,
          provider: 'facebook',
          facebook: profile._json
        });
        user.save()
          .then(savedUser => done(null, savedUser))
          .catch(err => done(err));
      })
      .catch(err => done(err));
  }));

  passport.use('facebook-agent', new FacebookStrategy({
      clientID: config.facebook.clientID,
      clientSecret: config.facebook.clientSecret,
      callbackURL: config.facebook.callbackURLForAgent,
      profileFields: [
        'displayName',
        'emails'
      ]
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOne({'facebook.id': profile.id}).exec()
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
            provider: 'facebook',
            facebook: profile._json
          });
          agent.save()
            .then(savedUser => done(null, savedUser))
            .catch(err => done(err));
        })
        .catch(err => done(err));
    }));

};
