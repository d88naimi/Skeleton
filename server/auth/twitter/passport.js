const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const md5 = require('md5');


module.exports.setup = (User, config) => {
  passport.use(new TwitterStrategy({
    consumerKey: config.twitter.clientID,
    consumerSecret: config.twitter.clientSecret,
    callbackURL: config.twitter.callbackURL,
    userProfileURL  : 'https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true'
  },
    function(token, tokenSecret, profile, done) {
      profile._json.id = `${profile._json.id}`;
      profile.id = `${profile.id}`;

      User.findOne({'twitter.id': profile.id}).exec()
        .then(user => {
          if(user) {
            return done(null, user);
          }

          user = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            username: profile.username,
            photoURL: `https://gravatar.com/avatar/${md5(profile.emails[0].value)}?s=200&d=retro`,
            role: 'user',
            provider: 'twitter',
            twitter: profile._json
          });
          user.save()
            .then(savedUser => done(null, savedUser))
            .catch(err => done(err));
        })
        .catch(err => done(err));
    }));
};
