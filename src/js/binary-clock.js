jQuery(document).ready(function($) {
    var clockDiv = $(".binary-clock");

    function displayDigit(number, digit) {

        for (var i=1; i <= 4; i++) {
            console.log(number);
            if (number & 1 == 1) {
                light(digit, i);
            }
            else {
                dim(digit, i);
            }

            number = number >> 1;
        }

    }

    function light(digit, index) {
        var led = $(clockDiv.find(".binary-clock-led-" + digit + "-" + index));

        console.log(led);
        console.log("light " + digit + ", " + index + led);
        led.addClass("lighted");
    }

    function dim(digit, index) {
        var led = $(clockDiv.find(".binary-clock-led-" + digit + "-" + index));
        console.log(led);
        console.log("dim " + digit + ", " + index + led);
        led.removeClass("lighted");
    }

    function displaySeconds() {
        var date = new Date();
        var seconds = date.getSeconds().toString();

        displayDigit(parseInt(seconds[seconds.length-1]), 2);
        if (seconds.length > 1) {
            displayDigit(parseInt(seconds[seconds.length-2]), 1);
        }

        setTimeout(function() {
            displaySeconds();
        }, 1000);
    }

    function displayNumber(number, digit) {
        var str = number.toString();
        displayDigit(parseInt(str[str.length - 1]), digit + 1);
        if (str.length > 1) {
            displayDigit(parseInt(str[str.length - 2]), digit);
        }
    }

    function displayTime() {
        var date = new Date();
        displayNumber(date.getSeconds(), 5);
        displayNumber(date.getMinutes(), 3);
        displayNumber(date.getHours(), 1);

        setTimeout(function() {
            displayTime()
        }, 1000);
    }
    displayTime();
});