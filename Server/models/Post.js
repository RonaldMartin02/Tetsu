
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
  imgLink: {
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
const Post = model('Post', postSchema);

module.exports = Post;