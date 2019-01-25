// Dependencies and files needed
const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bycrypt = require('bcryptjs');
const User = require('../../models/User');

// Route:       GET api/users/test
// Description: Tests users route
// Access:      Public
router.get('/usersTest', (req, res) => res.json({ msg: "Users test works" }));

// Route:       GET api/users/register
// Description: Register user
// Access:      Public
router.post('/register', (req, res) => {
    // Find user email if exists if not create the user in the database
    User.findOne({ email: req.body.email })
    .then(user => {
        if(user) {
            return res.status(400).json({email: 'Email already exists'});
        } else {
            // Grab the email address assigned avatar or set a default icon
            const avatar = gravatar.url(req.body.email, {
                size: '200',  // size of avatar
                rating: 'pg', // rating of avatar
                default: 'mm' // default icon
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
                  newUser.save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
                
                   
               }) 
            })
        }
    })
});


// Export the router
module.exports = router;