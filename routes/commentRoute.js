const express = require("express");
// On va stocker ici toutes les routes
const router = express.Router();

const commentController = require("../controllers/commentController");

// Les posts en général: /posts
router
  .route("/posts/:id_post/comments")
  .get(commentController.listAllComments)
  .post(commentController.createAComment);

// Les id posts: /posts/:id_posts
/*router
  .route("/comments/:id_comment")
  .get(commentController.getAComment)
  .put(commentController.updateAComment)
  .delete(commentController.deleteAComment);*/

module.exports = router;
