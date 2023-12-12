// On importe le module express
const express = require("express");
// Création d'une instance d'Express
const app = express();
// Définition du port sur lequel le serveur écoutera
const port = 3002;

// On se connecte à la base de donnée
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/apinode"); // Avec une installation local de mongodb

app.use(express.urlencoded({ extended: true }));
// Permet de comprendre le .json
app.use(express.json());

//PostRoute
const postRoute = require("./routes/postRoute");
app.use("/posts", postRoute);

// CommentRoute
const commentRoute = require("./routes/commentRoute");
app.use("/", commentRoute);

// Démarrage du serveur Express et écoute sur le port spécifié
app.listen(port, () => {
  // Affiche un message dans la console lorsque le serveur démarre
  console.log(`Example app listening on port ${port}`);
});
