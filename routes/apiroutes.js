// Dependencies
const router = require("express").Router();
const store = require("./../db/store");
const fs = require('fs');
var db = require("./../db/db.json");

router.get("/notes", function (req, res) {
    store
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err))
});

router.post('/notes', (req, res) => {
    store.addNote(req.body)
    res.json(`${req.method} request received`);
    req.body.id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    store.push(req.body);
    store.catch(err => res.status(500).json(err))
});

router.delete('/notes/:id', function (req, res) {
    db = db.filter(note => note.id !== req.params.id);
    fs.writeFile("./db/db.json", JSON.stringify(db, null, 2), (err) => err ? console.error(err) : console.log("success"));
    res.send(`Got a DELETE request at /user (${req.body})`)
  });

module.exports = router;