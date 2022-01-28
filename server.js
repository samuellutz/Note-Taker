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
db.push(req.body);
  fs.writeFile("./db/db.json", JSON.stringify(db, null, 2), (err) => err ? console.error(err) : console.log("success"));


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`)); 