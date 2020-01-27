function Call_Loop() {
    start= 12;
    currentNumber= "";
    while (start > 0) {
        currentNumber += "<br>" +start
        start--;
    }
    document.getElementById("Loop").innerHTML= currentNumber;
}

function stringLength() {
    var x = "How are you feeling";
    var z= x.length;
    document.getElementById("length").innerHTML= z;
}


var lettersBobby = ["B", "O", "B", "B", "Y"];
var Content = "";
var X;
function for_Loop() {
    for (X = 0; X < lettersBobby.length; X++) {
        Content += lettersBobby[X] + "<br>";
    }
    document.getElementById("Letters").innerHTML= Content;
}

function array_Function() {
    var Shark_picture = [];
    Shark_picture[0] = "Hammerhead shark";
    Shark_picture[1] = "Tiger shark";
    Shark_picture[2] = "Bull shark";
    Shark_picture[3] = "Sandbar shark";
    document.getElementById("Array").innerHTML= "This is a " + Shark_picture[1];
}

function constantFunction() {
    const Writing_Instrument = {type:"Pencil", brand:"PenCom", color:"Charcoal"};
    Writing_Instrument.color = "Red";
    Writing_Instrument.price= "$1";
    document.getElementById("Constant").innerHTML= "The cost of the " + Writing_Instrument.color + " " +
        Writing_Instrument.type + " is " + Writing_Instrument.price;
}

var ant = 10;
document.getElementById("eater").innerHTML= ant;
{
    let ant = 12;
    document.getElementById("eater2").innerHTML= ant;
}

let sock = {
    brand: " Hanes ",
    color: " black ",
    size: "large ",
    description : function() {
        return "The sock is a " + this.size + this.color + this.brand + " sock.";
    }
};
document.getElementById("sock_Object").innerHTML= sock.description();

function Call_Loop2() {
    start= 12;
    currentNumber= "";
    while (start > 0) {
        currentNumber += "<br>" +start
        if (start < 4) {
            break;
        }
        start--;
    }
    document.getElementById("Loop2").innerHTML= currentNumber;
}

function Call_Loop3() {
    start= 12;
    currentNumber= "";
    while (start > 0) {
        currentNumber += "<br>" +start
        if (currentNumber == 4) {
            continue;
        }
        start--;
    }
    document.getElementById("Loop3").innerHTML= currentNumber;
}