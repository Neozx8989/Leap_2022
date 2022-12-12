//While aar hiisen helber
// let Num = Number(prompt("Give random Numbers thank you :D"));
// let sum = 0;
// let rem = 0;

// while (Num > 0) {
//     rem = Num % 10;
//     sum = sum + rem;
//     Num = Math.floor(Num / 10);
// }
// console.log(sum);




// towchilson for helber 
Num = Number(prompt("Give random Numbers thank you :D"));
let sum = 0;
let rem = 0;

for ( ; Num > 0 ; ) {
    rem = Num % 10;
    sum = sum + rem;
    Num = Math.floor(Num / 10);
}

console.log(sum);