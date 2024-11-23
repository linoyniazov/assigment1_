const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
    title: String,
    content: String,
    Owner: String,
});

module.exports = mongoose.model("Posts", postSchema);