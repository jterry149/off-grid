// Dependencies
const express = require('express');
const router = express.Router();

// Get method to test the profile
router.get('/profileTest', (req, res) => res.json({msg: "Profile works"}));

// Export the router
module.exports = router;