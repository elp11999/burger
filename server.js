//
// Eat-Da-Burger!
// This a restaurant app that lets users input the names of burgers they'd like to eat.
// Whenever a user submits a burger's name, the app will display the burger on the left
// side of the page -- waiting to be devoured.
// Each burger in the waiting area also has a Devour it! button. When the button is clicked,
// the burger will move to the right side of the page.
// The app will store every burger in a database, whether devoured or not.
//
// server.js - Entry point to the Eat-Da-Burger application
// 

//
// https://frozen-escarpment-32292.herokuapp.com/
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