// Dependencies
const express = require('express');
const router = express.Router();

// Route:       GET api/users/usersTest
// Description: Tests users route
// Access:      Public
router.get('/usersTest', (req, res) => res.json({ msg: "Users works" }));

// Export the router
module.exports = router;