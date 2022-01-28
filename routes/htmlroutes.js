// DEPENDENCIES

const path = require("path");
const router = require("express").Router();

// routes


    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------

    router.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    router.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    module.exports = router;