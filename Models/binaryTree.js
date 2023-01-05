const mongoose = require('mongoose');

const binaryTreeSchema = new mongoose.Schema({
  value: {
    type: Number,
    required: true,
    unique: true
  },
  
  left: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BinaryTree',
    default: null
  },
  right: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BinaryTree',
    default: null
  }
});

module.exports = mongoose.model('BinaryTree', binaryTreeSchema)