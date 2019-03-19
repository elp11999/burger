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
  addBurger: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  // Function to update a burger
  updateBurger: function(vals, condition, cb) {
    orm.updateOne("burgers", vals, condition, function(res) {
      cb(res);
    });
  }
};

// Export Burgers object
module.exports = burgers;