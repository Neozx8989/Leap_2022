//1.Өгөгдсөн 2 тооны ихийг олох функц бич.
let a = Number(prompt("Give me first number"));
let b = Number(prompt("Give me second number"));

let x = (a,b) => {
    return a , b;
}
alert(x(a ,b));

// 2. Өгөгдсөн array -аас өгөгдсөн тоо байгаа эсэхийг олох функц бич. 
// Тухайн тоо байвал индексийг буцаана. Байхгүй бол -1 буцаана.
let randomArr = [1, 2, 3, 4, 5, 6, 7, 8];

