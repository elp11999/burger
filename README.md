# Eat-Da-Burger

This a restaurant app that lets users input the names of burgers they'd like to eat.
Whenever a user submits a burger's name, the app will display the burger on the left
side of the page -- waiting to be devoured.
Each burger in the waiting area will have a Devour it! button.
When the button is clicked, the burger will move to the right side of the page.
The application will store every burger in the database, whether devoured or not.

* This project was a perfect way for me to get introduced to using Express Handlebars and ORM in     NodeJS.

* This project uses the following NPM packages:
  * Express
  * Express Handlebars
  * MySql
  * DotEnv

* The Project consists of 1 Node JS applications:
  * server.js

* The application is deployed at https://frozen-escarpment-32292.herokuapp.com/
  
* If you decide to clone this repository and check it out, please follow these installation instructions:
  * Make sure you have NodeJS installed.
    * https://nodejs.org/en/download/
  * git clone https://github.com/elp11999/burger.git
  * Run npm install to setup the dependecies.
  * Install MySql.
    * https://www.mysql.com/downloads/
  * Import the database schema file schema.sql to the MySql database.
  * Import the database schema file seeds.sql to the MySql database.
  * Create file .env and enter the MySql database configuration:
    * MYSQL_HOSTNAME={host-name}
    * MYSQL_PORT={port-number}
    * MYSQL_USER={user-name}
    * MYSQL_PASSWORD={password}
  * Run the command "node server.js"
  * Visit page http://localhost:8080

* If you have any questions about the project, please contact me at mhenderson557@yahoo.com
* Enjoy :) 