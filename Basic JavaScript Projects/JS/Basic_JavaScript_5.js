function my_Function2() {
    var dT= document.write(typeof 8);
    document.getElementById("Dat").innerHTML= dT;
}

function negInf() {
    var neg= document.write(-3E315);
    document.getElementById("Dat").innerHTML= neg;
}

function Inf() {
    var pos= document.write(3E315);
    document.getElementById("Dat").innerHTML= pos;
}

function True() {
    var tr= (8>1);
    document.getElementById("Dat").innerHTML="8>1 = "  + tr;
}

function False() {
    var fal= (8<1);
    document.getElementById("Dat").innerHTML="8<1 = " + fal;
}

function typeCoercion() {
    var coer= ("8"+1);
    document.getElementById("Dat").innerHTML= coer;
}

function equalTrue() {
    var eqTrue= (10==10);
    document.getElementById("Dat").innerHTML= eqTrue;
}

function equalFalse() {
    var eqFalse= (10==0);
    document.getElementById("Dat").innerHTML= eqFalse;
}

function tripleEqual() {
    var triEq= (10===10);
    document.getElementById("Dat").innerHTML= triEq;
}

function tripleFalse_1() {
    var triFal1= ("grey"===10);
    document.getElementById("Dat").innerHTML= triFal1;
}

function tripleFalse_2() {
    var triFal2= ("10"===10);
    document.getElementById("Dat").innerHTML= triFal2;
}

function tripleFalse_3() {
    var triFal3= (11===10);
    document.getElementById("Dat").innerHTML= triFal3;
}

function andOperatorT() {
    var andOpT= (10===10 && 10>2);
    document.getElementById("Dat").innerHTML="10===10 && 10>2 = " + andOpT;
}

function andOperatorF() {
    var andOpF= (10===12 && 10>2);
    document.getElementById("Dat").innerHTML="10===12 && 10>2 = " + andOpF;
}

function orOperatorF() {
    var orOpF= (10===12 || 10<2);
    document.getElementById("Dat").innerHTML="10===12 || 10<2 = " + orOpF;
}

function orOperatorT() {
    var orOpT= (10===10 || 10<2);
    document.getElementById("Dat").innerHTML="10===10 || 10<2 = " + orOpT;
}

function notOperatorT() {
    var notOpT= !(10==12);
    document.getElementById("Dat").innerHTML="10 does not equal 12 = " + notOpT;
}

function notOperatorF() {
    var notOpF= !(10==10);
    document.getElementById("Dat").innerHTML="10 does not equal 10 = " + notOpF;
}


console.log(2+2);

console.log(5>12);
