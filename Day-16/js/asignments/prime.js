console.log('prime number algoritm')

let input = Number(prompt("Give me your prime number"));
let temp = 0;

for (let i = 2; i < Math.round(input/2); i++) {
    if (input % i  ==0) {
        temp = temp + 1;
    } 
}

if (temp == 0) {
    console.log("Its prime number")
} else {
    console.log("Its not a prime number")
}