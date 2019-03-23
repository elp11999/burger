//
// Eat-Da-Burger!
//
// Whenever a user submits a burger's name, the app will display the burger on the left
// side of the page -- waiting to be devoured.
// Each burger in the waiting area also has a Devour it! button. When the button is clicked,
// the burger will move to the right side of the page.
// The app will store every burger in a database, whether devoured or not.
//
// orm.js - Database Object Relational Mapping library for the Eat-Da-Burger application
// 

// Load connection module
var connection = require("./connection.js");

// ORM object
var orm  =  {

  // Function to select all rows/columns from the specfied table
  selectAll: function(tableInput, cb) {

    // Create query
    var sqlQuery = "SELECT * FROM " + tableInput + ";";

    // Issue query
    connection.query(sqlQuery, function(err, result) {

      // Check for error
      if (err) {
        throw err;
      }

      // Return result
      cb(result);
    });
  },

  // Function to add a new row to a table
  insertOne: function(table, vals, cb) {

    // SQL to add a new burger
    var sqlQuery = "insert into " +
                    table +
                    " (burger_name, devoured) values(?, ?);";
    //console.log("insertOne: " + sqlQuery);
    //console.log("insertOne: " + vals);

    // Issue query
    connection.query(sqlQuery, vals, function(err, result) {

      // Check for error
      if (err) {
        throw err;
      }

      // Return result
      cb(result);
    });
  },

  // Function to update a table columns
  updateOne: function(table, val, id, cb) {

    // Create query
    var sqlQuery = "UPDATE " +
                    table +
                    " SET " + 
                    "devoured = " +
                    val +
                    " WHERE id = " +
                    id + ";";
    //console.log("updateOne: " + sqlQuery);
                    
    // Issue query
    connection.query(sqlQuery, function(err, result) {

      // Check for error
      if (err) {
        throw err;
      }

      // Return result
      cb(result);
    });
  }
};

// Export orm object
module.exports = orm;
