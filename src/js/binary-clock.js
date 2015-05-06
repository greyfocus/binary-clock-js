jQuery(document).ready(function($) {
    var clockDiv = $(".binary-clock");

    /**
     * Displays a single digit. 
     *
     * @param digit the digit to be displayed.
     * @param column the column.
     */
    function displayDigit(digit, column) {
        for (var i = 1; i <= 4; i++) {
            if (digit & 1 == 1) {
                light(column, i);
            }
            else {
                dim(column, i);
            }

            digit = digit >> 1;
        }
    }

    /**
     * Lights up the "led" on the given position.
     * 
     * @param column the column of the led.
     * @param row the row of the led.
     */
    function light(column, row) {
        var led = $(clockDiv.find(".binary-clock-led-" + column + "-" + row));

        led.addClass("lighted");
    }

    /**
     * Dims the "led" on the given position.
     * @param column the column of the led.
     * @param row the row of the led.
     */
    function dim(column, row) {
        var led = $(clockDiv.find(".binary-clock-led-" + column + "-" + row));
        
        led.removeClass("lighted");
    }

    /**
     * Displays a two digit number.
     *
     * @param number the number to be displayed.
     * @param position the position (column) where the first digit should be displayed.
     */
    function displayNumber(number, position) {
        var str = number.toString();
        displayDigit(parseInt(str[str.length - 1]), position + 1);
        if (str.length > 1) {
            displayDigit(parseInt(str[str.length - 2]), position);
        }
    }

    /**
     * Displays time with periodic updates.
     */
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
