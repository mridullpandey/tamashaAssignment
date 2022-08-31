const express = require("express");
const users = require("../controllers/user.js");
const checkAuth = require("../middlewares/auth");
const router = express.Router();

// Create a new User
router.post("/api/v1/createUser", users.createUser);
// Update user calorie limit by userid
router.post("/api/v1/updateCLimit", users.updateCalorieLimit);

module.exports = router;
