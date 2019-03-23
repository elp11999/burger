//
// Eat-Da-Burger!
//
// Whenever a user submits a burger's name, the app will display the burger on the left
// side of the page -- waiting to be devoured.
// Each burger in the waiting area also has a Devour it! button. When the button is clicked,
// the burger will move to the right side of the page.
// The app will store every burger in a database, whether devoured or not.
//
// connection.js - MySql Connection library for the Eat-Da-Burger application
// 

// Load DotEnv library
require("dotenv").config();

// Load MySql library
var mysql = require("mysql");

// MySql Connection object
var connection;

// Create JAWSDB/MySql connection object
if (process.env.JAWSDB_URL)
    connection = mysql.createConnection(process.env.JAWSDB_URL);
else {
    connection = mysql.createConnection({
        host     : process.env.MYSQL_HOSTNAME,
        port     : process.env.MYSQL_PORT,
        user     : process.env.MYSQL_USER,
        password : process.env.MYSQL_PASSWORD,
        database: "burgers_db"
    });
}

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