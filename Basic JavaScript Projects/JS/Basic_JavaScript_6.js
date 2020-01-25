function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML= Can_ride + " to ride.";
}

function Shirt(Size, Color, Material) {
    this.Shirt_Size = Size;
    this.Shirt_Color = Color;
    this.Shirt_Material = Material;
}
var Shirt_1 = new Shirt("Large", "Red", "Polyester");
var Shirt_2 = new Shirt("Medium", "Grey", "Cotton");
var Shirt_3 = new Shirt("Small", "Navy Blue", "Silk");
function myFunction_2() {
    document.getElementById("New_and_This").innerHTML = 
    "Size: " +Shirt_1.Shirt_Size + " Color: " + Shirt_1.Shirt_Color + " Material: " +Shirt_1.Shirt_Material;
}

function nestFunction() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 23;
        function Plus_two() {Starting_point += 2;}
        Plus_two();
        return Starting_point;
    }
}