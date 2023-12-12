// Ici on créer notre base de donnée non-relationnelle
// On importe mongoose
const mongoose = require("mongoose");
// on acccède à toute les méthodes disponibles de mongoose que l'on stocke dans Schema
const Schema = mongoose.Schema;

// Ici on controle ce qu'on va implémenter dans la base de donnée
let postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: "Le contenue est requis",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", postSchema);
