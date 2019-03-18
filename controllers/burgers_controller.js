

// Load Burger ORM library
var burger = require("../models/burger.js");

// Load Express library
var express = require("express");

// Create Express router object
var router = express.Router();

// Setup the Express routes
router.get("/", function(req, res) {
    console.log(req.url);
    burger.getAllBurgers(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      //res.render("index", hbsObject);
      res.send("getAllBurgers");
    });
  });

// Export router object
module.exports = router;
