
// eslint-disable-next-line no-unused-vars
function selectionChange(){

   $("[data-id]").parent().hide();

   selectionId = $(".memberSelection").val()[0];

   const currentMember = $(`[data-id = ${selectionId}]`);

   currentMember.parent().show();

}



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