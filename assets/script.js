let today = moment();
$('#currentDay').text(today.format("dddd, MMMM Do"));

let timeBlock = $(".col-9");
let input = $("#userInput");
let currentHour = moment().format("H");
console.log(currentHour);

for (var i = 0; i < 9; i++) {
    if (i + 9 < currentHour) {
        timeBlock.eq(i).addClass('past');
    } else if (i + 9 > currentHour) {
        timeBlock.eq(i).addClass('future');
    } else {
        timeBlock.eq(i).addClass('present');
    }
}


