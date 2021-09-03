const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const minute = document.querySelector(".minute")
const second = document.querySelector(".second")
const milisec = document.querySelector(".milisec")
let minuteVal = 00;
let secondVal = 00;
let milisecVal = 00;
let IntervalID;

startBtn.addEventListener("click", function () {
    IntervalID = setInterval(startTimer, 10);
})
stopBtn.addEventListener("click", function () {
    clearInterval(IntervalID);
})
resetBtn.addEventListener("click", function () {
    clearInterval(IntervalID);
    minuteVal = 00;
    secondVal = 00;
    milisecVal = 00;
    min = "00";
    sec = "00";
    mil = "00";
    minute.innerHTML = min;
    second.innerHTML = sec;
    milisec.innerHTML = mil;
})

function startTimer() {
    milisecVal++;

    if (milisecVal <= 9) {
        milisec.innerHTML = "0" + milisecVal;
    }

    if (milisecVal > 9) {
        milisec.innerHTML = milisecVal;

    }

    if (milisecVal > 99) {
        secondVal++;
        milisecVal = 0;
        milisec.innerHTML = "0" + 0;
    }
    if (secondVal <= 9) {
        second.innerHTML = "0" + secondVal;
    }
    if (secondVal > 9) {
        second.innerHTML = secondVal;

    }
    if (secondVal > 59) {
        minuteVal++;
        secondVal = 0;
        second.innerHTML = "0" + 0;
    }
    if (minuteVal <= 9) {
        minute.innerHTML = "0" + minuteVal;
    }
    if (minuteVal > 9) {
        minute.innerHTML = minuteVal;

    }

}