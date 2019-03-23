//
// Eat-Da-Burger!
//
// Whenever a user submits a burger's name, the app will display the burger on the left
// side of the page -- waiting to be devoured.
// Each burger in the waiting area also has a Devour it! button. When the button is clicked,
// the burger will move to the right side of the page.
// The app will store every burger in a database, whether devoured or not.
//
// burger_controller.js - Express routes library for the Eat-Da-Burger application
// 

// Load Express library
var express = require("express");

// Create Express router object
var router = express.Router();

// Load Burger ORM library
var burger = require("../models/burger.js");

// Setup the Express route to get all burgers in the database
// which have not been devoured...
router.get("/", function(req, res) {
    burger.getAllBurgers(function(data) {
      var burgerObject = {
        burgers: data
      };
      //console.log(burgerObject);
      //res.json(burgerObject);
      res.render("index", burgerObject);
    });
});

// Setup the Express route to add a new burger
router.post("/api/burgers", function(req, res) {
    var vals = [ req.body.burger_name, req.body.devour ];
    burger.addBurger(vals, function(data) {
      var burgerObject = {
        burgers: data
      };
      //console.log(burgerObject);
      res.end();
    });
});

// Setup the Express route to update a burger
router.put("/api/burgers/:id", function(req, res) {
  var val = true;
  var id = req.params.id;
  burger.updateBurger(val, id, function(data) {
    var burgerObject = {
      burgers: data
    };
    res.end();
  });
});

// Export router object
module.exports = router;
