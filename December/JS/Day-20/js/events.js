console.log("DOM EVENT JAVASCRIPT");


let myButton = document.getElementById("myButton")
// console.log(myButton)

function changeBackgroundColor() {
    myButton.style = "background-color: green"
}


// myButton.style = `background-color: ${color}`;
// function changeColors () {
//     console.log("clicked");
//     if ( color === "green") {
//         myButton.style = `background-color: ${color}`;
//         color = "green"
//     } else {
//         myButton.style = `background-color: ${color}`;
//         color = 'white';
//     } 

// }

myButton.style = `background-color: ${color}`
function changeColor () {
    console.log("clicked");
    if (color == red) {
        myButton.style = `background-color: ${color}`;
        color = `red`
    } else {
        myButton.style = `background-color: ${color}`;
        color = `yellow`
    }
}

// myButton.addEventListener("click" , changeColors);



// let arrowFunc = () => {

// }

// myButton.addEventListener('click' , () => {
//     myButton.style = 'background-color: red;'
// }) 

// let registerButton = document.querySelector("#register");
// console.log(registerButton)
// registerButton.disabled = true;

document.querySelectorAll("p")[0].style = "background-color: red;"