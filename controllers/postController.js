const Post = require("../models/postModel");
const textApiProvider = require("../providers/textAppProviders");

// Méthode ListPosts
exports.listAllPosts = async (req, res) => {
  // Méthode asynchrone best pratique
  try {
    // On retourne tous les documents de mongoDB
    const posts = await Post.find({});
    // ON renvoie le status
    res.status(200);
    //On renvoie le résultat
    res.json(posts);
  } catch (error) {
    res.status(500);
    console.log(error);
    res.json({ message: "Erreur serveur" });
  }
};

// Méthode CreatePost On créer le données
exports.createAPost = async (req, res) => {
  // // On récupère ce qu'il y a dans la requete du client
  // const newPost = new Post(req.body);

  // try {
  //   // On insère les données dans la base de donnée
  //   const post = await newPost.save();
  //   res.status(201).json(post);
  // } catch (error) {
  //   res.status(500).json({ message: "Erreur serveur" });
  // }

  try {
    let newPost = new Post(req.body);

    let randomTextPromise = textApiProvider.getRandomText();
    let response = await randomTextPromise;

    if (!newPost.content) {
      newPost.content = response;
    }

    let post = await newPost.save();
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "requete invalide" });
  }
};

// Méthode getAPost On créer le données
exports.getAPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id_post);

    // Enregistrez les modifications
    res.status(200);
    res.json(post);
  } catch (error) {
    res.status(500);
    console.log(error);
    res.json({ message: "Erreur serveur" });
  }
};

// Méthode updatePost On créer le données
exports.updateAPost = async (req, res) => {
  try {
    // On met à jour les champs du post
    const post = await Post.findByIdAndUpdate(req.params.id_post, req.body, {
      // empêche de renvoyer l'ancien élément dans postman
      new: true,
    });

    // Enregistrez les modifications
    res.status(200);
    res.json(post);
  } catch (error) {
    res.status(500);
    console.log(error);
    res.json({ message: "Erreur serveur" });
  }
};

// Méthode deletePost On créer le données
exports.deleteAPost = async (req, res) => {
  try {
    // On met à jour les champs du post
    await Post.findByIdAndDelete(req.params.id_post);

    // Enregistrez les modifications
    res.status(200);
    res.json({ message: "Article supprimer" });
  } catch (error) {
    res.status(500);
    console.log(error);
    res.json({ message: "Erreur serveur" });
  }
};
