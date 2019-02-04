// Required Dependencies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Profile Database Model 
const Profile = require('../../models/Profile');

// Load User Database Model
const User = require('../../models/User');

// Route:       GET api/profile/profileTest
// Description: Tests profile route
// Access:      Public
router.get('/profileTest', (req, res) => res.json({msg: "Profile works"}));

// Route:       GET api/profile
// Description: Get current users profile
// Access:      Private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    
    // Empty object for the errors
    const errors = {};

    // If there is a profile go find it and populate if not let user know
    Profile.findOne({ user: req.user.id })
    .populate('user', ['name', 'avatar']).then(profile => {
    
        if (!profile) {
            errors.noprofile = 'There is no profile for this user';
            return res.status(404).json(errors);
        }
            res.json(profile);
        })
        .catch(err => res.status(404).json(err));
});



// Export the router
module.exports = router;