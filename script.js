// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //Saving the users added text
  $(".saveBtn").on("click", function () {
   //this is the event listener, stating that on "click" the following functions will occur.
    const val = $(this).siblings("textarea").eq(0).val();
   //in the above line, "this" refers to the .saveBtn and we are pulling the user added information by using the 
   //.siblings which is a sibing to the save button.  
    const id = $(this).parent().attr("id");
  //in the above line, we are stating that we want the "id" that is in the parent element 
    console.log(id, val) 
  // by using console log we can view the values of id and val in the developer tools
    localStorage.setItem(id, val) 
  //the above line is used to store the values in the browsers storage.
  });
  
  $(".time-block").each(function(){
    // the above lines are targeting all the .timeblock elements and executing the specified functions for each element found.
    const timeBlock = $(this);
    //"this" refers to ".timeBlock" and the function is ran to all elements found and the value here is save to the tag "timeblock" 
    const hour = timeBlock.attr("id").split("-").pop();
    //in this line we are getting the value of timeblock, pulling the parent id, and because there is a "-" we remove it by  using .split
    //and we use "pop" to extract the last value. "hour-9" -> "hour, 9" -> "9"
    const currentHour = dayjs().hour(); 
    //we create a class for current hour, we first use dayjs to pull current time and then specify we nee the hour 
    //the following lines are for extracting and saving the text added by the user.
    

    
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes?
    
    if (hour < currentHour ) {  
      $(this).addClass("past"); 
      $(this).removeClass("present");
      $(this).removeClass("future");
      //in the above logic, we state that if the "hour" that we got from the id, is less than the current time reffrenced from dayjs
      // then the following classes will be applied or removed, and are defined in the css page.   
    }else if (hour == currentHour) {
      $(this).removeClass("past"); 
      $(this).addClass("present");
      $(this).removeClass("future");
      //in this section if the hour in the id matches the current hour, we add the class of present 
    } else {
      $(this).removeClass("past"); 
      $(this).removeClass("present");
      $(this).addClass("future");
      //in this section we add the class of future if we are outside of our window we defined.
    }
    
    const id = $(this).attr("id");
    //the above line is used to extract the id from the .time-block
    const val = localStorage.getItem(id)
    //the above line pulls the value from local storage
    $(this).children("textarea").eq(0).val(val);
    //the above line pulls the usser added information from local storage 
    console.log(this);
    // allows the outputs to be seen in developer tools

    });
   
  });

const now = dayjs();
const currentDate = now.format('MMMM D, YYYY');
const currentTime = now.format('h:mm A');
// on the group above, we create the element of "now" to equal the current time off of dayjs.
//using the dayjs value we create two seperate elements, one for date and another for time, 
//we can also  modify the format depending on our preference.
document.getElementById('current-date').textContent = currentDate;
document.getElementById('current-time').textContent = currentTime;
//once we have the values of the time and the date, we can target an element line and add a value. in this case we target an element the its id.
//and we equal its value to the time or date function.