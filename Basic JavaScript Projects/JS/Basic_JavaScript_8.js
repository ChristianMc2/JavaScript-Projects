function concatenateFunction() {
    var part_1 = "I have ";
    var part_2 = "linked the strings ";
    var part_3 = "to form a complete ";
    var part_4 = "Sentence."
    var Whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("link").innerHTML= Whole_sentence;
}

function sliceFunction() {
    var sentence = "Never again I'll go sailing."
    var Section = sentence.slice(20,27);
    document.getElementById("Part").innerHTML= Section.toUpperCase();
}

function string_Method() {
    var x= 25;
    document.getElementById("numb").innerHTML= x.toString();
}

function adjustLength() {
    var x= 1222333.33334444455585555;
    document.getElementById("length").innerHTML= x.toPrecision(12);
}

function adjustLength_2() {
    var x= 1222333.33334444455585555;
    document.getElementById("length2").innerHTML= x.toFixed(2);
}