
// Load connection module
var connection = require("./connection.js");

// ORM object
var orm  =  {
    // Function to get all burgers
    getAllBurgers: function(tableInput, cb) {
        console.log("org.getAllBurgers: entered.");
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
    },

    addBurger:  function() {
        console.log("org.addBurger: entered.");
    },

    updateBurger: function() {
        console.log("org.updateBurger: entered.");
    },
};

// Export orm object
module.exports = orm;

