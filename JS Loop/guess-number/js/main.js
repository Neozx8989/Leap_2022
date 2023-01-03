let randomNumber = Math.round(Math.random());
console.log(randomNumber);
let promptUtga = Number(prompt('0 ees 2 iin hoorond random toog taagarai'));

for(let i=0; i<promptUtga; i++) {
    if(promptUtga == randomNumber) {
        alert('taaj chadlaa 💚')
    } else {
        alert('taaj chadsangui 🔴!')
    }
}