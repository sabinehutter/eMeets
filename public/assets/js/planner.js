// set variable for now
const now = moment();   
// Make a variable for current date 
const currentDate = moment().format("MMM Do YYYY");   
// Setting the date 
$("#currentDay").text("Today's Date: " + currentDate);
$(document).ready(function() {
   // For loop display tasks from local storage
   hourArr = $(".hour").toArray();
   for (i = 0; i < hourArr.length; i++) {
      let hourVal = localStorage.getItem($(hourArr[i]).attr("data-time"));

      // hourVal.replace("", "Please Enter Task");

      if (hourVal === null){
         hourVal = "Enter Schedule";
         
      }

      $(hourArr[i]).siblings("textarea").text(hourVal);
   }
});
// For loop for rows with time, task, and save buttons
for (i = 0; i < 10; i++) {
   //create a variable for the row
   const addRow = $("<div>").addClass("row");
   //create a variable for the time block
   const addTime = $("<div>").addClass("hour col-md-1").text(moment("9:00 AM", "hh:mm A").add(i, "hours").format("hA"));
   addTime.attr("data-time", moment("9:00 AM", "hh:mm A").add(i, "hours").format("hA"));
   //create a variable for the taskblock
   const addTask = $("<textarea>").addClass("col-11");
   //create a variable for the save block
   const saveButton = $("<button>").addClass("cta-1").html("Save");
   saveButton.css("border", "none");
   saveButton.css("color", "white");
   saveButton.css("margin-bottom", "20px");
   // Placing content above in the DOM in order.
   //appending the container with the row
   $(".container-planner").append(addRow);
   //append the row with the time 
   $(addRow).append(addTime);
   //after the time display the task 
   $(addTime).after(addTask);
   //after the task display the save button
   $(addTask).after(saveButton);
   // if else statement to choose the color of the row
   //if the time is the same as the time on the timeblock, display task as red
   if (now.isSame(moment("9:00 AM", "hh:mm A").add(i, "hours"), "hour")) {
      $(addTask).addClass("present");
      //if the time is in the future, display green
   } else if (now.isBefore(moment("9:00 AM", "hh:mm A").add(i, "hours"), "hour")) {
      $(addTask).addClass("future");
      //if the time is in the past, display grey
   } else if (now.isAfter(moment("9:00 AM", "hh:mm A").add(i, "hours"), "hour")) {
      $(addTask).addClass("past");
   } 
   
   
}
// Save click event to store data in the local storage
$(".cta-1").on("click", function() {
   localStorage.setItem($(this).siblings("div.hour").attr("data-time"), $(this).siblings("textarea").val());
});