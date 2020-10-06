const { response } = require("express");
var express = require("express");
var app = express();
var path = require("path");
var PORT = process.env.PORT || 3003;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// app.use(express.static(__dirname, "/public"));
// app.use("/js", express.static(__dirname + "public/js"));
// app.use("/css", express.static(__dirname + "public/css"));

// require("./routes/apiRoutes");
// require("./routes/htmlRoutes");

app.get("/", function (request, response) {
    response.sendFile(path.join(__dirname, "/public"));
});

app.get("*", function (request, response) {
    response.sendFile(path.join(__dirname + "/public/index.html"));
})

app.get("/notes", function (request, response) {
    response.sendFile(path.join(__dirname + "/public/notes.html"));
})

app.get("/index", function (request, response) {
    response.sendFile(path.join(__dirname + "/public/assets/css/styles.css"));
})



app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

