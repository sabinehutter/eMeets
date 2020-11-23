
// eslint-disable-next-line no-unused-vars
function selectionChange(){

   $("[data-id]").parent().hide();

   selectionId = $(".memberSelection").val()[0];

   const currentMember = $(`[data-id = ${selectionId}]`);

   currentMember.parent().show();

}

function groupSelection(){
   const groupName = $(".group-name").text();

   const currentMember = $(`[data-id = ${groupName}]`);

   currentMember.show();
}
groupSelection();

// $(function() {
   
//    $("#submitMember").on("click", function(event) {
//       // code to get /group/:groupid? route
//       event.perventDefault();
//       console.log("click")
//       console.log($(".group").val());

//       const newMember = {
//          first_name: $(".first-name").val().trim(),
//          last_name: $(".last-name").val().trim(),
//          email_address: $(".email_address").val().trim(),
//          group:  $(".groupSelection").val(),
//          social_handle:  $(".social_handle").val().trim(),
//          zip_code: $(".zip_code").val().trim(),
//          description: $(".description").val().trim()
//       };



//       // Send the POST request.
//       $.ajax({
//          type: "POST",
//          url: "/api/newMemberRegister",
//          data: newMember,
//          dataType: 'json',
//     success: function () {
//         alert("Success");
//     },
//     error: function () {
//         alert("Error");
//     }
//       }).then(
//          function() {
//             console.log("created new member");
//             // Reload the page to get the updated list
//             window.location.pathname = "/member";
//          }
//       );
//    });
// }
// );