// Required Dependencies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load profile validation 
const validateProfileInput = require('../../validation/profile');
const validateVehicleInput = require('../../validation/vehicle');

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

// Route:       Get api/profile/all
// Description: Get all users profiles
// Access:      Public
router.get('/all', (req,res) => {
    // Empty object variable to store errors
    const errors = {};

    // Get all the profiles and populate those files if they are found. If there are no profiles send to the message to the user.
    Profile.find()
        .populate('user', ['name', 'avatar'])
        .then(profiles => {
            if(!profiles) {
                errors.noprofile = 'There are no profiles';
                return res.status(404).json(errors);
            }

            res.json(profiles);
        })
        .catch(err => res.status(404).json({profile: 'There are no profiles.'}));
});

// Route:       Get api/profile/handle/:handle
// Description: Get the profiles by their handles
// Access:      Public
router.get('/handle/:handle', (req, res) => {
    // Empty variable object to track errors
    const errors = {};

    // Find the user handle profile if one and respond with correct response
    Profile.findOne({ handle: req.params.handle })
        .populate('user', ['name', 'avatar'])
        .then(profile => {
            if(!profile) {
                errors.noprofile = 'There is no profile for this user';
                res.status(404).json(errors);
            }
            res.json(profile);
        })
        .catch(err => res.status(404).json(err));
});

// Route:       Get api/profile/user/:user_id
// Description: Get the profiles by their user id
// Access:      Public
router.get('/user/:user_id', (req, res) => {
    // Empty variable object to track errors
    const errors = {};

    // Find the profile by the userid
    Profile.findOne({ user: req.params.user_id })
        .populate('user', ['name', 'avatar'])
        .then(profile => {
            if(!profile) {
                errors.noprofile = "There is no profile for this user";
                res.status(404).json(errors);
            }

            res.json(profile);
        })
        .catch(err =>
           res.status(404).json({ profile: 'There is no profile for this user'}) 
        );
});

// Route:       Post api/profile
// Description: Create and edit user profile
// Access:      Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    
    // Variable to reference the validateProfileInput and handle errors
    const { errors, isValid } = validateProfileInput(req.body);
  
    // Check Validation
    if (!isValid) {
        // Return any errors with 400 status
        return res.status(400).json(errors);
    }
  
    // Get fields for the profile
    const profileFields = {};
        profileFields.user = req.user.id;
        if (req.body.handle) profileFields.handle = req.body.handle;
        if (req.body.location) profileFields.location = req.body.location;
        if (req.body.bio) profileFields.bio = req.body.bio;
  
        // Social
        profileFields.social = {};
        if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
        if (req.body.instagram) profileFields.social.instagram = req.body.instagram;
        if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
        if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
        
  
    Profile.findOne({ user: req.user.id }).then(profile => {
        if (profile) {
          // Update
          Profile.findOneAndUpdate(
            { user: req.user.id },
            { $set: profileFields },
            { new: true }
          ).then(profile => res.json(profile));
        } else {
  
          // Create and check if handle exists
          Profile.findOne({ handle: profileFields.handle }).then(profile => {
            if (profile) {
              errors.handle = 'That handle already exists';
              res.status(400).json(errors);
            }
  
            // Save Profile when it is created
            new Profile(profileFields).save().then(profile => res.json(profile));
          });
        }
    });
});

// Route:       Post api/profile/vehicle
// Description: Add vehicles to the profile
// Access:      Private
router.post('/vehicle', passport.authenticate('jwt', {session: false}), (req, res) => {
    // Variable to check for the vehicles input errors
    const { errors, isValid } = validateVehicleInput(req.body);

    // Check the validation and return the error status
    if (!isValid) {
        return res.status(400).json(errors);
    }

    // Find the profile and add the vehicle for the user
    Profile.findOne({ user: req.user.id }).then(profile => {
        // Variable to make vehicle object
        const newVehicle = {
            make: req.body.make,
            model: req.body.model,
            year: req.body.year
        };

        // Add vehicles to the array of vehicles
        profile.vehicle.unshift(newVehicle);

        // Save the vehicle data to the user profile
        profile.save().then(profile => res.json(profile));
    });
});

// Route:       Delete api/profile/vehicle/:veh_id
// Description: Delete vehicles from the profile
// Access:      Private
router.delete('/vehicle/:veh_id', passport.authenticate('jwt', { session: false }), (req, res) => {

    Profile.findOne({ user: req.user.id }).then(profile => {
        // Remove the index from the profile user for the vehicle
        const removeIndex = profile.vehicle.map(item => item.id).indexOf(req.params.veh_id);

        // Splice the vehicle out of the array
        profile.vehicle.splice(removeIndex, 1);

        // Save the changes to user profile
        profile.save().then(profile => res.json(profile));
    })
    .catch(err => res.status(404).json(err));
});

// Route:       Delete api/profile
// Description: Delete user and the profile from the database
// Access:      Private
router.delete('/', passport.authenticate('jwt', { session: false }), (req,res) => {
    Profile.findOneAndRemove({ user: req.user.id }).then(() => {
        User.findOneAndRemove({ _id: req.user.id }).then(() =>
            res.json({ success: true })
        );
    });
});


// Export the router
module.exports = router;