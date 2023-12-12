const express = require("express");
// On va stocker ici toutes les routes
const router = express.Router();

const postController = require("../controllers/postController");

// Les posts en général: /posts
router
  .route("/")
  .get(postController.listAllPosts)
  .post(postController.createAPost);

// Les id posts: /posts/:id_posts
router
  .route("/:id_post")
  .get(postController.getAPost)
  .put(postController.updateAPost)
  .delete(postController.deleteAPost);

module.exports = router;
