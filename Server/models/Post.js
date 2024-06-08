
const { Schema, model } = require('mongoose');
const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  PostType: {
    type: String,
    required: false
  },
  postDate: {
    type: Date,
    default: Date.now
  },
  username: {
    type: String,
    required: true
  },
});
const Post = model('Build', postSchema);

module.exports = Post;