const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const EntrySchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"]
  },
  content: {
    type: String,
    required: [true, "Content is required"]
  },
});

module.exports = mongoose.model('Notes', EntrySchema);