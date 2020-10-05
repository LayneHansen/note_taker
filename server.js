const { response } = require("express");
var express = require("express");

var app = express();

var path = require("path");

var PORT = process.env.PORT || 3003;

// var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(__dirname, "/public"));

// require("./routes/apiRoutes");
// require("./routes/htmlRoutes");

app.get("*", function (request, response) {
    response.sendFile(path.join(__dirname + "/Develop/public/index.html"));
})

app.get("/notes", function (request, response) {
    response.sendFile(path.join(__dirname + "/Develop/public/notes.html"));
})

app.get("/notes", function (request, response) {
    response.sendFile(path.join(__dirname + "/Develop/public/assets/css/styles.css"));
})


// app.get("/", function (request, response) {
//     response.sendFile(path.join(__dirname, "/Develop/public"));
// });

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

