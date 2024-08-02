function displayGreeting() {
    var now = new Date();
    var hours = now.getHours();
    var greeting;

    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    alert(greeting);
}
window.onload = displayGreeting;

function colorChange() {
    var button = document.getElementById("buttonColor");
    var currentColor = button.style.backgroundColor;
    var newColor = currentColor === "blueviolet" ? "green" : "blueviolet";
    button.style.backgroundColor = newColor;
}

let place1=document.getElementById("place1");
let place2=document.getElementById("place2");
function addition(){
    let add=Number(place1.value)+Number(place2.value)
    alert("Addition is: "+add)
}
function Subtract(){
    let sub=Number(place1.value)-Number(place2.value)
    alert("Subtraction is: "+sub)
}
function Multiply(){
    let mult=Number(place1.value)*Number(place2.value)
    alert("Multiply is: "+mult)
}
function Divide(){
    let divi=Number(place1.value)/Number(place2.value)
    alert("Division is: "+divi)
}