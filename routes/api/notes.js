const express       = require('express');
const router        = express.Router();
const Entry         = require('../../models/notes');

router.get('/notes', (req, res, next) => {
  Entry.find({}, (err, entries) => {
    if (err) { return res.json(err).status(500); }

    return res.json(entries);
  });
});

router.get('/notes/:id', (req, res, next) => {
  Entry.findById(req.params.id, (err, entry) => {
    if (err)    { return res.json(err).status(500); }
    if (!entry) { return res.json(err).status(404); }

    return res.json(entry);
  });

});
router.post("/selectFavourite/:id", (req, res, next) => {
    const EntryId = req.params.id;
    const update1 = {
        favourite: "Yes"
    }
    Entry.findByIdAndUpdate(EntryId, update1).then(entry => {
        entry.favourite = update1.favorite
        console.log("yes", favorite)
        return res.json(`Esta entrada a sido marcada como favorita`)
    })
})

router.post('/notes', (req, res, next) => {
  const newEntry = new Entry({
    title: req.body.title,
    content: req.body.content
  });

  newEntry.save( (err) => {
    if (err)             { return res.status(500).json(err) }
    if (newEntry.errors) { return res.status(400).json(newEntry) }
                           return res.json(newEntry);
  });
});

module.exports = router;