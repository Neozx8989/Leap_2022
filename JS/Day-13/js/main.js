// console.log(Math.PI);
// console.log(Math.PI.toFixed(2));

// const budget = 1_000_000_000;
// console.log(budget);

// let amount =123_123_123_123_123
// console.log(amount);

// const degress = 45;
// let rad = degress * (Math.PI / 180);
// console.log(rad.toFixed(3));

// let a = 5, b = 9;
// const diff = Math.abs(a - b);
// console.log(diff.toFixed(1));

// console.log(Math.ceil(-8.0032));

// console.log(Math.floor(-5.0203));

// console.log(Math.round(0.32));

// console.log(Math.round(5.95));

// console.log(Math.max(-1, -3, -5, -2));

// console.log(Math.min(5, -2, 6, 7, 2));

// console.log(Math.pow(7, 3));

// console.log(Math.sqrt());


// const givex = Number(prompt('Give me y'));
// const givey = Number(prompt('Give me z'));
// alert(Math.sqrt(Math.pow(y, 2) + (Math.pow(z, 2))));

// console.log(Math.floor(Math.random() * 6));



// 1. 2 тоо prompt - оор авна.
// 2. prompt - оор өгсөн 2 тооны хооронд дурын тоо generate хийж гаргана уу.
// const max = (Number(prompt("Give me Number Max")));
// const min = (Number(prompt("Give me Number Min")));
// console.log((Math.random() * (max - min) + max).toFixed(0));

// let count = 1;
// console.log("loop started")
// while (count <= 20) {
//     console.log((Math.random() * (max - min) + max).toFixed(0));
//     count = count + 1;   // !!! ENIIG ZAAWALL BICIH YSTOI
// }
// console.log("Loop ended");

// let ask = prompt("Togloomo urgeljluuleh uu?").toLowerCase();
// while (ask == "yes") {
//     alert("Thanks"); 
//     ask = prompt("Daraagin uyruu");
//     console.log("game over");
//     alert("Game Over");
// } 


// Toonii niilber oloh
// let gadnahtoo = Number(prompt("Give random numbers"));
// let count = 1;
// let niilber = 1;
// while (count < gadnahtoo) {
//     console.log(count);
//     count = count + 1;
//     niilber = niilber + count;
//     console.log(niilber); 
// }



// while loop ашиглан 0-100 хүртэлх тооны бүх тэгш тоог олох.
// let min = 0;
// let max = 100;
// let count = 2;
// while (count <= max) {
//     console.log(count);
//     count = count + 2;
// }

// isn't it prime number?



//bagshiin bicsrn


// let max = Number(prompt('Give me a number')); // 40
// let count = 0;
// let sum = 0;

// while (count = max) {
//     // console.log(count);
//     count = count + 1; // 8
//     sum = sum + count; // 18 + 8 = 26
//     console.log(count); // 8
//     console.log(sum) // 26
// }

// // max = 10, count = 0, sum = 0
// // iteration 1: count = 1
// count = count + 1; // 1
// sum = sum + count; // 0 + 1 = 1
// console.log(count); // 1
// console.log(sum) // 1

// // iteration 1: count = 2
// count = count + 1; // 2
// sum = sum + count; // 1 + 2 = 3
// console.log(count); // 3
// console.log(sum) // 3

console.log('day 14');
let max = 10;
let start = 0;
while (start < max) {
    console.log(start);
    start = start + 1;
}