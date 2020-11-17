$(function() {
   $(".group-card").on("click", function() {
      // code to get /group/:groupid? route
   });

   $("#submitMember").on("click", function(event) {
      // code to get /group/:groupid? route
      event.preventDefault();

      const newMember = {
         first_name: $(".first-name").val().trim(),
         last_name: $(".last-name").val().trim(),
         email: $(".email_address").val().trim(),
         social_handle:  $(".social_handle").val().trim(),
         zip_code: $(".zip_code").val().trim(),
         description: $(".description").val().trim()
      };

      console.log("hello");

      // Send the POST request.
      $.ajax({
         type: "POST",
         url: "/api/newMemberRegister",
         data: newMember
      }).then(
         function() {
            console.log("created new member");
            // Reload the page to get the updated list
            window.location.pathname = "/member";
         }
      );
   });
}
);