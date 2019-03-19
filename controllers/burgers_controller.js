


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
    var cols = [ "burger_name", "devoured" ];
    var vals = [ req.body.burger_name, req.body.devoured ];
    burger.addBurger(cols, vals, function(data) {
      var burgerObject = {
        burgers: data
      };
      //console.log(burgerObject);
      res.end();
    });
});

// Setup the Express route to update a burger
router.put("/api/burgers/:id", function(req, res) {
  var vals = { "devoured" : true };
  var condition = "id = " + req.params.id;
  burger.updateBurger(vals, condition, function(data) {
    var burgerObject = {
      burgers: data
    };
    res.end();
  });
});

// Export router object
module.exports = router;
