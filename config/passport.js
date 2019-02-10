// Required Dependencies
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('User');

// Required files
const keys = require('../config/keys');

// Empty object for options
const options = {};

// Grab our keys and our Bearer Token needed for authentication
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use(
        new JwtStrategy(options, (jwt_payload, done) => {
        // Find the user by the id
        User.findById(jwt_payload.id)
            .then(User => {
                // If the user is found return the user
                if(User){
                    return done(null, User);
                }
                // If the user is not found return false
                return done(null, false);
            })
            .catch(err => console.log(err));
        })
    );
};
