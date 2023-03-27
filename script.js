// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


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
    // get hour from div
    const timeBlock = $(this);
    const hour = timeBlock.attr("id").split("-").pop();
    
    // conditional statements for the past / present/ future css class
    // compare the value down below
    
    // get current hour from day js
    const currentHour = dayjs().hour(); 
    if (hour < currentHour ) { 
      $(this).addClass("past"); 
      $(this).removeClass("present");
      $(this).removeClass("future");
      
    }else if (hour == currentHour) {
      $(this).removeClass("past"); 
      $(this).addClass("present");
      $(this).removeClass("future");
      
    } else {
      $(this).removeClass("past"); 
      $(this).removeClass("present");
      $(this).addClass("future");
    }
    
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


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  
 

});

const now = dayjs();
const currentDate = now.format('MMMM D, YYYY');
const currentTime = now.format('h:mm A');

document.getElementById('current-date').textContent = currentDate;
document.getElementById('current-time').textContent = currentTime;
