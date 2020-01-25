function Subtract() {
   var Subtraction = 5 - 2    
    document.getElementById("Math").innerHTML = "5 - 2 =" + Subtraction; 
}

function Add() {
    var Addition = 5 + 2    
     document.getElementById("Math").innerHTML = "5 + 2 =" + Addition; 
 }

 function Divide() {
     var Division = 5 / 2
     document.getElementById("Math").innerHTML = "5/2 =" + Division;
 }

 function Multiply() {
     var Multiplication = 5 * 2
     document.getElementById("Math").innerHTML = "5*2 =" + Multiplication;
 }

 function AddMult() {
     var Addiply = 1+2*8
     document.getElementById("Math").innerHTML = "1+2*8 =" + Addiply;
 }

 function Modulus() {
     var remainder = 37%5
     document.getElementById("Math").innerHTML = "The remainder of 37/5 is " + remainder;
 }

 function Negation_Operator() {
     var Negate = 14
     document.getElementById("Math").innerHTML = -Negate;
 }

 function Increment_Operator() {
     var Increment = 13
     Increment++;
     document.getElementById("Math").innerHTML = Increment;
 }

 function Decrement_Operator() {
    var Decrement = 13
    Decrement--;
    document.getElementById("Math").innerHTML = Decrement;
}

function Random_Number() {
    Random = (Math.random() * 1000);
    Math.round(Random);
    document.getElementById("Math").innerHTML = "Random number = " +Math.round(Random);
}