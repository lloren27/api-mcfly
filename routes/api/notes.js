const express       = require('express');
const router        = express.Router();
const Note         = require('../../models/notes');

router.get('/notes', (req, res, next) => {
  Note.find({}, (err, notes) => {
    if (err) { return res.json(err).status(500); }

    return res.json(notes);
  });
});

router.get('/notes/:id', (req, res, next) => {
  Note.findById(req.params.id, (err, notes) => {
    if (err)    { return res.json(err).status(500); }
    if (!notes) { return res.json(err).status(404); }

    return res.json(notes);
  });

});
router.post("/selectFavourite/:id", (req, res, next) => {
    const NotesId = req.params.id;
    const update = {
        favourite: "Yes"
    }
    Note.findByIdAndUpdate(NotesId, update).then(note => {
        note.favourite = update.favourite
        return res.json(`Esta nota a sido marcada como favorita`)
    }).catch(e => console.log(e))
})
router.get('/favourites', (req, res) => {
  Note.find({
      favourite: "Yes"
    })
    .then(favourites => {
      console.log(favourites)
      return res.status(200).json(favourites);
    })

  })

router.post('/newNotes', (req, res, next) => {
  const newNote = new Note({
    title: req.body.title,
    content: req.body.content
  });

  newNote.save( (err) => {
    if (err){
      return res.status(500).json(err)}
    if (newNote.errors) {
      return res.status(400).json(newNote)}
    return res.json(newNote);
  });
});

module.exports = router;