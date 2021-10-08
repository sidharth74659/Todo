// Configure Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User.js')
const passport = require('passport')

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/login/google/callback"
},
    function (accessToken, refreshToken, profile, cb) {
        // User.findOrCreate({ googleId: profile.id }, function (err, user) {
            console.log(profile)
            // return cb(err, user);
        // });
    }
));