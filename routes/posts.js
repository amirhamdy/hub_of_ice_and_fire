const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');

const postController = require("../controllers/postController");

router.post("/create", auth, postController.create);
router.get("/view/:postId", auth, postController.view);
router.get("/hashtag/:hashtag", auth, postController.getHashtagPosts);
router.get("/user/:username", auth, postController.getUserPosts);
router.get("/recent", auth, postController.getRecentPosts);

module.exports = router;