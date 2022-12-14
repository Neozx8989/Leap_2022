

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
    window.setInterval(startInterval, 50);
}

function startInterval() {
    let now = new Date ();
    let myTimer = document.getElementById("myTimer");
    myTimer.innerHTML = now.getHours () +' : ' + now.getMinutes () +' : '+ now.getSeconds () + ' : ' + now.getMilliseconds ();
}
