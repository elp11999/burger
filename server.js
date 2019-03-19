//
// Eat-Da-Burger
//

// Load Routes library
var routes = require("./controllers/burgers_controller.js");

// Load Express Handlebars.
var exphbs = require("express-handlebars");

// Load Express library
var express = require("express");

// Create Express object
var app = express();

// Setup location of static html content
app.use(express.static("public"));

// Setup Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setup Express handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Setup Express routes
app.use(routes);

// Setup Heroku and default port address to listen on
var PORT = process.env.PORT || 8080;

// Issue Application startup message
console.log("Burger: Server started.");

// Issue listen
app.listen(PORT, function() {
    console.log("Burger: Listening on port:" + PORT);
});