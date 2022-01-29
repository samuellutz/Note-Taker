// Dependencies
const express = require("express");
const apiRoutes = require("./routes/apiroutes.js");
const htmlRoutes = require("./routes/htmlroutes.js");
const db = require('./db/db.json');

// Create an express server
const app = express();

// Create a port
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.post('/api/notes', (req, res) => {

    res.json(`${req.method} request received`);
  
    //generates 4 digit uuid
    req.body.id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  
    //pushes new note to db
    db.push(req.body);
  
    //writes new db to json
    fs.writeFile("./db/db.json", JSON.stringify(db, null, 2), (err) => err ? console.error(err) : console.log("success"));
  
  });
  


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`)); 5