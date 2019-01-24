// Dependencies
const express = require('express');
const router = express.Router();

// Get method to test users
router.get('/usersTest', (req, res) => res.json({ msg: "Users works" }));

// Export the router
module.exports = router;