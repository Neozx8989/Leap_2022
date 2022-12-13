console.log("BOM JS")
// console.log(window);
// window.alert('Hello')

// window.open('https://google.com' , 'Hello')
// window.confirm('Hello');
// let result = window.confirm('Та устгахдаа бэлэн байна уу');
// let message = result ? 'Та ок товчийг дарлаа' :
// function showAlert() {
//     timeoutID = setTimeout(alert, 3000, "setTimeout Demo!");
// }

// function clearAlert() {

// }
// 'Та cansel товчийг дарлаа'
// console.log(result);

let alertButton = document.getElementById("alertButton");
let canselButton = document.getElementById("canselButton");
let timeOutID;


alertButton.addEventListener("click" , () => {
    timeoutID = setTimeout(alert, 3000, "setTimeout Demo!");
})

canselButton.addEventListener("click" , () => {
    console.log(timeOutID);
    clearTimeout(timeOutID);
    console.log(timeOutID)
    
})

console.log(timeOutID);
setTimeout(() => {
    console.log("Time out is running");
} , 5000);

let counter = 0;

// setInterval(startInterval, 1000);

function startInterval() {
    let now = new Date();
    let myTimer = document.getElementById('myTimer').innerHTML = now;
    myTimer.innerHTML = now
    console.log(counter);
    counter++;
}

let startMyTier = document.getElementById('startTimer');
timerbutton.addEventListener('click',runTimerInterval)

function runTimerInterval () {
    window.setInterval(startInterval, 1000);
}

function startInterval() {
    let now = new Date ();
    let myTimer = document.getElementById("myTimer");
    myTimer.innerHTML = now.getSeconds ();
}
