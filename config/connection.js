
// Load MySql library
var mysql = require("mysql");

// Create MySql connection object
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "elp1elp1",
    database: "burgers_db"
 });

// Connect to database
connection.connect(function(err) {
    if (err) {
        console.log("Burger: Unable to connect to database: " + err.stack);
        return;
    }
    console.log("Burger: Connected to database id:" + connection.threadId);
});

// Export connection object
module.exports = connection;