//
// Eat-Da-Burger!
//
// Whenever a user submits a burger's name, the app will display the burger on the left
// side of the page -- waiting to be devoured.
// Each burger in the waiting area also has a Devour it! button. When the button is clicked,
// the burger will move to the right side of the page.
// The app will store every burger in a database, whether devoured or not.
//
// burger.js - Model for the Eat-Da-Burger application
// 

// Load ORM library
var orm = require("../config/orm.js");

// Create Burgers object
var burgers  =  {

  // Function to get all burgers
  getAllBurgers: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  // Function to add a burger
  addBurger: function(vals, cb) {
    orm.insertOne("burgers", vals, function(res) {
      cb(res);
    });
  },

  // Function to update a burger
  updateBurger: function(val, id, cb) {
    orm.updateOne("burgers", val, id, function(res) {
      cb(res);
    });
  }
};

// Export Burgers object
module.exports = burgers;