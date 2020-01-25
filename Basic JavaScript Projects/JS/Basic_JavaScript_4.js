function my_Dictionary() {
    var Shirt = {
        Size: "Large",
        Color: "Grey",
        Material: "Polyester",       
    };
    delete Shirt.Size;
    document.getElementById("Dictionary").innerHTML = Shirt.Size;
}