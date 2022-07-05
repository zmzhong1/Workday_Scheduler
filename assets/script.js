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
    // textBlock[i].addClass
} 

// store the textarea value into localStorage
$('.saveBtn').on("click", function() {
    let time = $(this).parent().attr("id");
    let text = $(this).siblings('.textBlock').val();
    localStorage.setItem(time, text);
});


timeBlockColor();

// display the stored value in local storage on the textarea
for (let i = 0; i < 9; i++) {
    textBlock.eq(i).val(localStorage.getItem(textBlock.eq(i).parent().attr("id")));
}


