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
router.get('/', passport.authenticate('jwt', {session: false}), (req,res)=> {
    // Declared variable to hold empty error objects
    const errors = {};
    
    // Find the user profile if there is one if not let user know 
    Profile.findOne({ user: req.user.id }).then(profile => {
        if(!profile) {
            errors.noprofile = 'There is no profile for this user';
            return res.status(404).json(errors);
        }
    })
});

// Export the router
module.exports = router;