// Jishee 1.
document.getElementById("helloText").innerHTML = "Hello world"


// 2 daalgavar
document.getElementsByClassName("dummy").innerHTML = "Hello i'm Dummy"

// 3 
document.getElementById("demo").innerHTML = "Date : " + Date ();

// 4 
document.getElementsByTagName("img")[0].src= "tushigart2.jpg"

// 5 
document.querySelectorAll(".profileName")[0].style.color = "Orange"

// 6


// 7
// let myButton = document.getElementById("myBtn");
// function changeBackgroundColor () {
// myButton.style = "background-color: green"
// }
// myButton.addEventListener("click",changeBackgroundColor());


let myButton = document.getElementById("myBtn");
function changeBackgroundColor () {
myButton.style = "background-color: green"
}
myButton.addEventListener("click",changeBackgroundColor);

// arrow function ashiglasan deerh code iig hylbarchilsan
myButton.addEventListener("click",()=>{myButton.style = "background-color: green"});