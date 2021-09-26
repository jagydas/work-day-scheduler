//Define variables 

var saveBtn = $(".saveBtn");

//display current date and time
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm:ss a'));


//color indication for present, past, future

/*target the id's from 9am-5pm
 compare with current time */

function coloredCalendar() {
    var time = moment().hours();
    $(".ts").each(function() {
        var currentTime = parseInt($(this).attr("id"));

        if (currentTime === time) {
            $(this).addClass("present");

        } else if (currentTime < time) {
            $(this).addClass("past");
        } else {
            $(this).addClass("future");
        }


    })

};

// on click of save button ,the time get added to local storage
saveBtn.on("click", function() {
    var hr = $(this).siblings(".time").text();
    var item = $(this).siblings(".planner").val();
    localStorage.setItem(hr, item);

});

// page refresh shows the local storage data

function fetchData() {
    $(".time").each(function() {
        var currentHr = $(this).text();
        console.log("currentHr" + currentHr);
        var currentItem = localStorage.getItem(currentHr);
        console.log("currentItem" + currentItem);

        if (currentItem !== null) {
            $(this).siblings(".planner").val(currentItem);
        }

    });
}

coloredCalendar();
fetchData();