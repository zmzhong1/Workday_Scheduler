let today = moment();
$('#currentDay').text(today.format("dddd, MMMM Do"));

let timeBlock = $(".time-block");
let input = $("#userInputl");
// input.addClass('past');

// let timeBlock = document.querySelectorAll(".time")
console.log(timeBlock);
console.log(timeBlock[0].id);
let currentHour = moment().format("H");
console.log(currentHour);

for (var i = 0; i < 9; i++) {
    if (timeBlock[i].id < currentHour) {
        timeBlock[i].input.addClass('past');
    }
}


