const Notes = require('../models/notes');
const mongoose     = require('mongoose');
mongoose.connect('mongodb://localhost/notes');

const entries = [
  {
    title: "Primer Post",
    content: "Hola Caracola."
  },
  {
    title: "Segundo Post",
    content: "Has Visto que locura."
  },
  {
    title: "Tercer Post",
    content: "¿Esto no es nuevo no ?."
  },
  {
    title: "Cuarto Post",
    content: "Se parece a twitter."
  },
];

Notes.create(entries, (err, entries) => {
  if (err){ throw(err) }
  console.log("Success", entries);
  mongoose.connection.close();
})