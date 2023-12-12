const express = require("express");
const app = express();
const port = 3002;

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/apinode");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Route
const postRoute = require("./routes/postRoute");
app.use("/posts", postRoute);

const commentRoute = require("./routes/commentRoute");
app.use("/", commentRoute);

const userRoute = require("./routes/userRoute");
app.use("/", userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
