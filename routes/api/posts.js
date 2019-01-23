// Dependencies 
const express = require('express');
const router = express.Router();

// Get method to test post 
router.get('/postTest', (req, res) => res.json({ msg: "Posts works just fine" }));

// Export the router
module.exports = router;