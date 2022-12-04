// 1.
let i1 = 4;
let i2 = 3; 
if (i1 > i2) {
    console.log("True")
} else {
    console.log("False")
}

if (i1 < i2) {
    console.log("True")
} else {
    console.log("False")
}

// 2.
let one = 4 > 3 && 10 < 12;
console.log(one);
let two = 4 > 3 && 10 > 12;
console.log(two);
let three = 4 > 3 || 10 < 12;
console.log(three);
let four = 4 > 3 || 10 > 12; // ene n true utgatai bga tul true ee dagj yvna
console.log(four);
let five = !(4 > 3); // haaltni umnu bga ! temdeg n not buyu true bwl false bolj false bwl true bolno.
console.log(five);
let six = !(4 < 3);
console.log(six);
let eight = !(4 > 3 && 10 < 12);
console.log(eight);
let nine = !(4 > 3 && 10 > 12);
console.log(nine);
let ten = !(4 === "4");
console.log(ten);

// 3.
let myAge = 19;
let yourAge = Number(prompt("Насаа оруулна уу"));

if (myAge < yourAge) {
    console.log("Sain baina uu ta saihan uwuljij baina uu")
} else {
    console.log("Sain baina uu minii duu")
}

// 4.
