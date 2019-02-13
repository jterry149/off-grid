// Required Dependencies
const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load our input validation files
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Load our User model file
const User = require('../../models/User');

// Route:       GET api/users/test
// Description: Tests users route functioning
// Access:      Public
router.get('/usersTest', (req, res) => res.json({ msg: "Users test works" }));

// Route:       POST api/users/register
// Description: Register user and POST to the database
// Access:      Public
router.post('/register', (req, res) => {
    // Object to bring in our errors
    const { errors, isValid } = validateRegisterInput(req.body);

    // Check our Validation Here
    if(!isValid){
        return res.status(400).json(errors);
    }
    // Find user email if exists if not create the user in the database
    User.findOne({ email: req.body.email }).then(user => {
        if(user) {
            errors.email = 'Email already exists';
            return res.status(400).json(errors);
        } else {
            // Grab the email address assigned avatar or set a default icon
            const avatar = gravatar.url(req.body.email, {
                s: '200',  // size of avatar
                r: 'pg', // rating of avatar
                d: 'mm' // default icon
            });

            // Create the new user
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                avatar,
                password: req.body.password
            });

            // Encrypt the password using hashing
            bycrypt.genSalt(10, (err, salt) =>{
               bycrypt.hash(newUser.password, salt, (err, hash) => {
                  if(err) throw err;
                  newUser.password = hash;
                  newUser
                    .save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err)); 
               });
            });
        }
    });
});

// Route:       POST api/users/login
// Description: Login user then return Json Web tokens
// Access:      Public
router.post('/login', (req, res) => {
    // Object to bring in our errors
    const { errors, isValid } = validateLoginInput(req.body);

    // Check our Validation Here
    if(!isValid){
        return res.status(400).json(errors);
    }
    
    // Declare our variables and assign values
    const email = req.body.email;
    const password = req.body.password;
    
    // Find the user by email address
    User.findOne({email}).then(user => 
    {
        // If statement to check for user if not found then return not found
        if(!user)
        {
            errors.email = 'User not found';
            return res.status(404).json(errors);
        }

        // Check the password using bycrypt by comparing the hashed password with the actual password passed.
        bycrypt.compare(password, user.password).then(isMatch => 
        {
            if(isMatch) 
            {
                // User is matched create jsonwebtoken payload for authentication
                const payload = 
                { 
                    id: user.id,
                    name: user.name,
                    avatar: user.avatar
                };
                // Sign the token and pass in necessary parameters
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    { expiresIn: 3600 },
                    (err, token) => {
                       res.json({
                        success: true,
                        token: 'Bearer ' + token
                       }); 
                    }
                );
            }   else {
                errors.password = 'Password was incorrect';
                return res.status(400).json(errors);
            }
        });
    });
});

// Route:       Get api/users/current
// Description: Current user then return their data
// Access:      Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req,res) => {
    // Sends back a Json object of data to user for the application
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
});

// Export the router
module.exports = router;