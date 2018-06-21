const Notes = require('../models/notes');
const mongoose     = require('mongoose');
mongoose.connect('mongodb://localhost/api-mcfly');

const notes = [
  {
    title: "Primer Post",
    content: "Hola Caracola.",
    favourite: "No"
  },
  {
    title: "Segundo Post",
    content: "Has Visto que locura.",
    favourite: "Yes"
  },
  {
    title: "Tercer Post",
    content: "¿Esto no es nuevo no ?.",
    favourite: "No"
  },
  {
    title: "Cuarto Post",
    content: "Se parece a twitter.",
    favourite: "Yes"
  },
];

Notes.create(notes, (err, notes) => {
  if (err){ throw(err) }
  console.log("Success", notes);
  mongoose.connection.close();
})