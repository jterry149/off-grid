// Dependencies
const express = require('express');
const router = express.Router();

// Route:       GET api/profile/profileTest
// Description: Tests profile route
// Access:      Public
router.get('/profileTest', (req, res) => res.json({msg: "Profile works"}));

// Export the router
module.exports = router;