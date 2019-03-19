
// Load DotEnv library
require("dotenv").config();

// Load MySql library
var mysql = require("mysql");

// Create MySql connection object
var connection = mysql.createConnection({
    host     : process.env.MYSQL_HOSTNAME,
    port     : process.env.MYSQL_PORT,
    user     : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
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