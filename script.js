// display date
//var todayDate = moment().format('dddd, Do MMMM, YYYY');
var todayDate = moment().format('LLLL');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // saveBtn click
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        // Save to local storage
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        // get current hour
        var timeNow = moment().hour();

        $(".timeblocks").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hr")[1]);

            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

    // get data from local storage
    $("#hr8 .description").val(localStorage.getItem("hr8"));
    $("#hr9 .description").val(localStorage.getItem("hr9"));
    $("#hr10 .description").val(localStorage.getItem("hr10"));
    $("#hr11 .description").val(localStorage.getItem("hr11"));
    $("#hr12 .description").val(localStorage.getItem("hr12"));
    $("#hr13 .description").val(localStorage.getItem("hr13"));
    $("#hr14 .description").val(localStorage.getItem("hr14"));
    $("#hr15 .description").val(localStorage.getItem("hr15"));
    $("#hr16 .description").val(localStorage.getItem("hr16"));
    $("#hr17 .description").val(localStorage.getItem("hr17"));
    //$("#hr18 .description").val(localStorage.getItem("hr18"));
    //$("#hr19 .description").val(localStorage.getItem("hr19"));
    //$("#hr20 .description").val(localStorage.getItem("hr20"));
    //$("#hr21 .description").val(localStorage.getItem("hr21"));
    timeTracker();
})