let today = moment();
$('#currentDay').text(today.format("dddd, MMMM Do"));
let textBlock = $(".textBlock");
let currentHour = moment().format("H");

// Gives the textarea background color a grey on past, red on present, and green on future compared to current local time
function timeBlockColor(){
    for (let i = 0; i < 9; i++) {
        if (i + 9 < currentHour) {
            textBlock.eq(i).addClass('past');
        } else if (i + 9 > currentHour) {
            textBlock.eq(i).addClass('future');
        } else {
            textBlock.eq(i).addClass('present');
        }
    }
} 

// store the textarea value into localStorage
$('.saveBtn').on("click", function() {
    let time = $(this).parent().attr("id");
    console.log(time);
    let text = $(this).siblings('.textBlock').val();
    console.log(text);
    localStorage.setItem(time, text);
});


timeBlockColor();
// Place in the stored value back into the textarea
$("#9AM .textBlock").val(localStorage.getItem("9AM"));
$("#10AM .textBlock").val(localStorage.getItem("10AM"));
$("#11AM .textBlock").val(localStorage.getItem("11AM"));
$("#12PM .textBlock").val(localStorage.getItem("12PM"));
$("#1PM .textBlock").val(localStorage.getItem("1PM"));
$("#2PM .textBlock").val(localStorage.getItem("2PM"));
$("#3PM .textBlock").val(localStorage.getItem("3PM"));
$("#4PM .textBlock").val(localStorage.getItem("4PM"));
$("#5PM .textBlock").val(localStorage.getItem("5PM"));
