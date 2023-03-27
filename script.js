// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//  var now  = dayjs()
//  console.log(now);

$(function () {
  //Save funtionality
  $(".saveBtn").on("click", function () {
   // save the users information
   // get the text out of our text area
    const val = $(this).siblings("textarea").eq(0).val();
    const id = $(this).parent().attr("id");
    console.log(id, val) 
    localStorage.setItem(id, val) 
  });
  
  $(".time-block").each(function(){
    // conditional statements for the past / present/ future css class
    // get hour from div
    // get current hour from day js
    // compare the value down below
   //if() {
    
   // }else if () {

   // }else {

    //}

    //retrieving the values
    const id = $(this).attr("id");
    const val = localStorage.getItem(id) 
    $(this).children("textarea").eq(0).val(val);
    console.log(this);
  });


  // --TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes?
  // --How can Day.js be used to get the
  // current hour in 24-hour time?
  // loop over each time block

  const today = dayjs();
  const currentHour = parseInt(today.format("H"));
  console.log(currentHour);
  $(".time-block").each(function () {
    const timeblock = $(this);
    const hour = timeblock
    // hour-9
    .attr("id")
    // ['hour','9']
    .split("-")
    //returns 9
    .pop(); 
  })
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  
 //current day----------------------
 

});

const now = dayjs();
const currentDay = now.format('dddd');
const currentTime = now.format('h:mm A');

document.getElementById('current-day').textContent = currentDay;
document.getElementById('current-time').textContent = currentTime;
