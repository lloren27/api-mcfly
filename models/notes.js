const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const EntrySchema = new Schema({
  title: String,
  content: String,
  favourite:{type: String,default:'No'},
});

module.exports = mongoose.model('Notes', EntrySchema);