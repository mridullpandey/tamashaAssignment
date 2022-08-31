const express = require("express");
const food = require("../controllers/food.js");
const checkAuth = require("../middlewares/auth");
const router = express.Router();
// Create a new Food
router.post("/api/v1/food-taken", food.takenNewFood);
// get food of specific user
router.get("/api/v1/food/:userId", food.getFoodByUserId);

router.get("/api/v1/entry-report/:days", food.getLastXDaysEntry);

router.get("/api/v1/user-avg-calories/:days", food.getUsersAverageCalories);
module.exports = router;
