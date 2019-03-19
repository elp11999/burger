
// Load connection module
var connection = require("./connection.js");

// Helper function to add "?" marks
// This function was borrowed from previous activities :)
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
// This function was borrowed from previous activities :)
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

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
  insertOne: function(table, cols, vals, cb) {

    // Create query
    var sqlQuery = "INSERT into " +
                    table + " (" + 
                    cols.toString() + ")" +
                    " values(" +
                    printQuestionMarks(vals.length) + ");";

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
  updateOne: function(table, vals, condition, cb) {

    // Create query
    var sqlQuery = "UPDATE " +
                    table +
                    " SET " + 
                    objToSql(vals) +
                    " WHERE " +
                    condition + ";";
                    
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
