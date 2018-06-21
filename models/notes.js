const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const NotesSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"]
  },
  content: {
    type: String,
    required: [true, "Content is required"]
  },
  favourite: {
    type: String,
    default: "No"
  }
});

const Notes= mongoose.model('notes', NotesSchema);
module.exports = Notes