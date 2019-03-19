//
// Wait for the DOM to settle in
// 
$(function() {
  console.log("Burger.js started!!!");
  $(".change-devour").on("click", function(event) {
    console.log("Update burger!!!");
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

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

  $("#add-burger").on("click", function(event) {
    console.log("Add burger!!!");
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger-name").val().trim(),
      devour: false
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
