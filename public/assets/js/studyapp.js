$(function() {
   $(".group-card").on("click", function() {
      // code to get /group/:groupid? route
   });

   $(".member-submit").on("click", function() {
      // code to get /group/:groupid? route
      event.preventDefault();

      const newMember = {
         first_name: $(".first-name").val().trim(),
         last_name: $(".first-name").val().trim(),
         email: $(".email").val().trim(),
         group_title: $(".group-title").val().trim(),
         location: $(".location").val().trim(),
         description: $(".member-description").val().trim()
      };

      // Send the POST request.
      $.ajax("/newMember", {
         type: "POST",
         data: newMember
      }).then(
         function() {
            console.log("created new member");
            // Reload the page to get the updated list
            location.reload();
         }
      );
   });
}
);