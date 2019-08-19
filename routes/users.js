const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');

const userController = require("../controllers/userController");

router.get("/", userController.index);
router.get("/profile/:username", auth, userController.profile);
router.post("/register", userController.register);

module.exports = router;