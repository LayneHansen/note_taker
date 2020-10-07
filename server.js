const { response } = require("express");
var express = require("express");
var app = express();
var path = require("path");
var fs = require("fs");
var PORT = process.env.PORT || 3003;


// app.use functions======================================================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


app.get("/api/notes", function (req, res) {
    var newJSON = require("./Develop/db/db.json");
    res.json(newJSON)
});

app.post("/api/notes", function (req, res) {
    var newJSON = require("./Develop/db/db.json");
    var newNote = req.body;
    newNote.id = Date.now();
    newJSON.push(newNote);

    fs.writeFile("./Develop/db/db.json", JSON.stringify(newJSON), function (err) {
        if (err) {
            throw err;
        };
        res.json(newNote);
    });
});

app.delete("/api/notes/:id", function (req, res) {
    var deleteJSON = require("./Develop/db/db.json");
    deleteJSON = deleteJSON.filter(function (note) {
        return note.id != req.params.id;
    });

    fs.writeFile("./Develop/db/db.json", JSON.stringify(deleteJSON), function (err) {
        if (err) {
            throw err;
        };
        res.json();
    });
});

// app.get functions=======================================================================================
app.get("/", function (request, response) {
    response.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("*", function (request, response) {
    response.sendFile(path.join(__dirname, "./public/index.html"));
});

// app.listen function====================================================================================
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

