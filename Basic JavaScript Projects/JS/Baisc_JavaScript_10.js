function Call_Loop() {
    start= 12;
    currentNumber= "";
    while (start > 0) {
        currentNumber += "<br>" +start
        start--;
    }
    document.getElementById("Loop").innerHTML= currentNumber;
}