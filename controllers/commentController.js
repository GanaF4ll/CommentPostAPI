const Comment = require("../models/commentModel");
const Post = require("../models/postModel");

// Méthode ListComments
exports.listAllComments = async (req, res) => {
  // Méthode asynchrone best pratique
  try {
    // On retourne tous les documents de mongoDB
    const comments = await Comment.find({ post_id: req.params.id_post });
    // ON renvoie le status
    res.status(200);
    //On renvoie le résultat
    res.json(comments);
  } catch (error) {
    res.status(500);
    console.log(error);
    res.json({ message: "Erreur serveur" });
  }
};

// Méthode CreatePost On créer le données
exports.createAComment = async (req, res) => {
  try {
    // Si le post existe
    await Post.findById(req.params.id_post);

    // On place le commentaire dans le post_id qui lui correspond
    const newComment = new Comment({
      ...req.body,
      post_id: req.params.id_post,
    });

    try {
      // On insère les données dans la base de donnée
      const comment = await newComment.save();
      res.status(201).json(comment);
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur (db)." });
    }
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur (post inexistant)." });
  }
};

// Méthode getAPost On créer le données
exports.getAComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id_comment);

    if (comment) {
      // Enregistrez les modifications
      res.status(200);
      res.json(comment);
    } else {
      res.status(204);
      console.log(error);
      res.json({ message: "Comment not find" });
    }
  } catch (error) {
    res.status(500);
    console.log(error);
    res.json({ message: "Erreur serveur" });
  }
};

// Méthode updatePost On créer le données
exports.updateAComment = async (req, res) => {
  try {
    // On met à jour les champs du post
    const comment = await Comment.findByIdAndUpdate(
      req.params.id_comment,
      req.body,
      {
        // empêche de renvoyer l'ancien élément dans postman
        new: true,
      }
    );

    // Enregistrez les modifications
    res.status(200);
    res.json(comment);
  } catch (error) {
    res.status(500);
    console.log(error);
    res.json({ message: "Erreur serveur" });
  }
};

// Méthode deletePost On créer le données
exports.deleteAComment = async (req, res) => {
  try {
    // On met à jour les champs du post
    const comment = await Comment.findByIdAndDelete(req.params.id_comment);

    if (comment) {
      // Si le commentaire existe (on le supprime)
      res.status(200);
      res.json({ message: "Commentaire supprimé" });
    } else {
      // Si le commentaire n'éxiste plus
      res.status(200);
      res.json({ message: "Ce commentaire n'existe plus" });
    }
  } catch (error) {
    res.status(500);
    console.log(error);
    res.json({ message: "Erreur serveur" });
  }
};
