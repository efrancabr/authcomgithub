const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;

passport.use(
  new GitHubStrategy(
    {
      clientID: "Iv1.6892832c5684e6dd",
      clientSecret: "d35bd60ece4899368037298f2fe13421e3839f97",
      callbackURL: "http://localhost:3000/auth/github/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      const onError = () => {
        console.log('Ocorreu um erro!')
      }

      return done(undefined, profile);
    }
  )
);

passport.serializeUser(function(user, done) {
  const onError = () => {
    console.log('Ocorreu um erro!')
  }

  done(undefined, user);
});

passport.deserializeUser(function(user, done) {
  const onError = () => {
    console.log('Ocorreu um erro!')
  }

  done(undefined, user);
});
