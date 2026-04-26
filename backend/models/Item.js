const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  // TODO (Student): Add the missing fields based on the instructions.md
  // 1. description
  description: {
    type: String,
    required: true,
  },
  // 2. category
  category: {
    type: String,
    enum: ['Electronics', 'Clothing', 'Books', 'Home', 'Other'],
  },
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
