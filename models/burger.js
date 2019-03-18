// Load ORM library
var orm = require("../config/orm.js");

// Create Burgers object
var burgers  =  {
    getAllBurgers: function(cb) {
      orm.getAllBurgers("burgers", function(res) {
        cb(res);
      });
    },
    addBurger: function(cols, vals, cb) {
      orm.addBurger("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    updateBurger: function(objColVals, condition, cb) {
      orm.updateBurger("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    }
};

// Export Burgers object
module.exports = burgers;