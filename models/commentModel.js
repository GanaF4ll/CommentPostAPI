// Ici on créer notre base de donnée non-relationnelle
// On importe mongoose
const mongoose = require("mongoose");
// on acccède à toute les méthodes disponibles de mongoose que l'on stocke dans Schema
const Schema = mongoose.Schema;

// Ici on controle ce qu'on va implémenter dans la base de donnée
let commentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: "Le contenue est requis",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  post_id: {
    type: String,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
