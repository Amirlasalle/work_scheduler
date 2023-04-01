// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    var timeBlockEl = document.getElementsByClassName('time-block');
    var currentHour = dayjs().hour();
    for (let index = 0; index <timeBlockEl.length; index++) {
      const element = timeBlockEl[index];
      console.log(element);
      var hourAt = parseInt(element.getAttribute('id').split('-')[1]);
      console.log(typeof hourAt);
      console.log(hourAt);
      if (hourAt < currentHour){
        element.classList.add('past');
      }else if (hourAt === currentHour){
        element.classList.remove('past');
        element.classList.add('present');
      }else {
        element.classList.remove('past');
        element.classList.remove('present');
        element.classList.add('future');
      }
    }
    $(".saveBtn").on("click", function(){
      console.log($(this));
      console.log($(this).prev().val());
      var descriptionEl = $(this).prev().val();
      var descriptionKey = $(this).parent().attr("id");
      localStorage.setItem(descriptionKey, descriptionEl);
    })
    $(function(){
      $(".description").each(function(index, value){
        console.log($(this));
        var descriptionKey = $(this).parent().attr("id");
        $(this).text(localStorage.getItem(descriptionKey));
      })
    })
    ///Next to do is the funtion to add description to the local storage. 
    
      // TODO: Add a listener for click events on the save button. This code should
      // use the id in the containing time-block as a key to save the user input in
      // local storage. HINT: What does `this` reference in the click listener
      // function? How can DOM traversal be used to get the "hour-x" id of the
      // time-block containing the button that was clicked? How might the id be
      // useful when saving the description in local storage?
      //
      // TODO: Add code to apply the past, present, or future class to each time
      // block by comparing the id to the current hour. HINTS: How can the id
      // attribute of each time-block be used to conditionally add or remove the
      // past, present, and future classes? How can Day.js be used to get the
      // current hour in 24-hour time?
      //
      // TODO: Add code to get any user input that was saved in localStorage and set
      // the values of the corresponding textarea elements. HINT: How can the id
      // attribute of each time-block be used to do this?
      //
      // TODO: Add code to display the current date in the header of the page.
    });
    