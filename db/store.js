// DEPENDENCIES

const fs = require("fs");
const path = require("path");
const util = require("util");
const express = require("express");
const app = express();

// Creates a promise, which the program will complete before moving on. 
const readFileAsync = util.promisify(fs.readFile);
// Creates a promise, which the program will complete before moving on. 
const writeFileAsync = util.promisify(fs.writeFile)

class Store {
    constructor() {
        this.lastId = 0;
    };
    read() {
        return readFileAsync(path.join(__dirname, "db.json"), "utf8");
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
    addNote(newNote) {
        //create new obj with notes param using notes.title and notes.text
        console.log(newNote);
        return this.getNotes().then(notes => {
            // console.log(newNote, notes);
            const newNoteList = [...notes, newNote]; // Creates a new array with the memebers of the array notes and adds newNote to the end
            console.log(newNoteList);
            // Step 1: convert to a string
            return this.write(newNoteList);
        })
        
    };
    deleteNotes(title) {
        // use the filter function
        return this.getNotes()
            .then(notes => {
                console.log("This note says " + title);
                for (var i = 0; i < notes.length; i++) {
                        if (notes[i].title === title) {
                            // Splice takes i position, and then deletes the 1 note.
                            notes.splice(i, 1);
                        break;
                    }
                }
                this.write(notes);
                
            })
    }
};

const store = new Store();

module.exports = store;