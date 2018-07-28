// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();

var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// space


// Data
// =====================================================================

var characters = [
    {
        routeName: "",
        name: "",
        role: "",
        age: 900,
        forcePoints: 2000
    },
    {
        routeName: "",
        name: "",
        role: "",
        age: 900,
        forcePoints: 2000

    }
];


// Routes - getting information and sending
// ==========================================
// Basic route that sends the user first to the AJAX page
app.get("/", function (req, res) {
    // res.send("Welcome to the Friends Finder Dating App");
    res.sendFile(path.join(__dirname, "view.html"));

});

// Displays all Characters
app.get("/api/characters", function (req, res) {
    return res.json(characters);
});

// Displays a single character, or shows "No character found"
app.get("/api/characters/:character", function (req, res) {
    var chosen = req.params.character;

    console.log(chosen);

    for (var i = 0; i < characters.length; i++) {
        if (chosen === characters[i].routeName) {
            return res.json(characters[i]);
        }
    }

    return res.json(false);

});
// Create New Characters - takes in JSON input-getting new data
app.post("/api/characters", function (req, res) {
    var newcharacter = req.body;

    console.log(newcharacter);

    characters.push(newcharacter);

    res.json(newcharacter);
});


// Starts the server to begin listening

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});