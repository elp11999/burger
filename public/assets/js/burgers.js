//
// Eat-Da-Burger!
// This a restaurant app that lets users input the names of burgers they'd like to eat.
// Whenever a user submits a burger's name, the app will display the burger on the left
// side of the page -- waiting to be devoured.
// Each burger in the waiting area also has a Devour it! button. When the button is clicked,
// the burger will move to the right side of the page.
// The app will store every burger in a database, whether devoured or not.
//
// burger.js - Front-end JavaScript to process user commands from the UI
// 

//
// Wait for the DOM to settle in
// 
$(function() {
  console.log("Burger.js started!!!");

  // Function to change the burger status to eaten
  $(".change-devour").on("click", function(event) {
    console.log("Update burger!!!");

    // Get update object data
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    // Setup burger object for put request
    var newDevourState = {
      devour: newDevour
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed sleep to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // Function to add a new burger
  $("#add-burger").on("click", function(event) {
    console.log("Add burger!!!");
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    // Get the new burger name
    var burger_name = $("#burger-name").val().trim();

    // Ensure the user entered a burger
    if (burger_name.length == 0)
      return;

    // Setup burger object for post request
    var newBurger = {
      burger_name: burger_name,
      devour: false
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new Burger");

        // Clear the burger name
        $("#burger-name").val("");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
