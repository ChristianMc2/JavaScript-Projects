var x = 12;

function Addition() {   
    var add = 3 + 8;
    document.getElementById("Math").innerHTML= add;
}

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Date").innerHTML= "How are you today?";
    }
}

function myIf() {
    if (10 > 2) {
        document.getElementById("Math").innerHTML="The larger number is 10";
    }
}

function drink_Function() {    
    Age = document.getElementById("Age").value;     
    if (Age >= 21) {
        Drink = "You are old enough to drink";
    }
    else {
        Drink = "you are not old enough to drink";
    }
    document.getElementById("howOld").innerHTML= Drink;
}

console.log(2+3);