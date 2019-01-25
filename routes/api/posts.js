// Dependencies 
const express = require('express');
const router = express.Router();

// Route:       GET api/posts/postTest
// Description: Tests post route
// Access:      Public
router.get('/postTest', (req, res) => res.json({ msg: "Posts works just fine" }));

// Export the router
module.exports = router;