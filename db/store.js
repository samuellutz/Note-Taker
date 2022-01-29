// DEPENDENCIES


const fs = require("fs");
const util = require("util");
const path = require("path")

// Creates a promise, which the program will complete before moving on. 
const readFileAsync = util.promisify(fs.readFile);
// Creates a promise, which the program will complete before moving on. 
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    constructor() {
        this.lastId = 0;
    };
    read() {
        return readFileAsync("db/db.json", "utf8");
    };
    write(note) {
        return writeFileAsync(path.join(__dirname, "db.json"), JSON.stringify(note));
    };
    getNotes() {
        
        return this.read().then(notes => {
            // let parsedNotes = [].concat(JSON.parse(notes));
            let parsedNotes = JSON.parse(notes);
            console.log(parsedNotes);
            return parsedNotes;
        });
    };
    addNotes(note) {
        console.log(newNote);
        return this.getNotes().then(notes => {
            console.log(newNote, notes);
            const newNoteList = [...notes, newNote]; // Creates a new array with the memebers of the array notes and adds newNote to the end
            console.log(newNoteList);
            // Step 1: convert to a string
            return this.write(newNoteList);
        })
    };
    deleteNotes(id) {

    };
};

module.exports = new Store();