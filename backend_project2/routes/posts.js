const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  imageText: {
    type: String,
    required: true, // Ensures that text for the post is provided
  },
  image: {
    type: String,
    required: true, // Ensures that an image is provided
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true, // Ensures that a user reference is provided
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Array,
    default: [], // Empty array by default for likes
  },
});

module.exports = mongoose.model('Post', postSchema);
