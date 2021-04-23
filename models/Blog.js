const mongoose = require('mongoose');
const shortid = require('shortid');
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

const BlogSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: shortid.generate,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Blog', BlogSchema);
