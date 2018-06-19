const express       = require('express');
const notes = require('./api/notes');
const router        = express.Router();

router.use('/api', notes);

module.exports = router;