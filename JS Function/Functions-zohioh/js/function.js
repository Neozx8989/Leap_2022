// //1.Өгөгдсөн 2 тооны ихийг олох функц бич.
// let a = Number(prompt("Give me first number"));
// let b = Number(prompt("Give me second number"));

// let x = (a,b) => {
//     return a , b;
// }
// alert(x(a ,b));

// 2. Өгөгдсөн array -аас өгөгдсөн тоо байгаа эсэхийг олох функц бич. 
// Тухайн тоо байвал индексийг буцаана. Байхгүй бол -1 буцаана.
let randomArr = [1, 2, 3, 4, 5, 6, 7, 8];

let x = function (randomArr) {
    return randomArr
}
console.log(randomArr.indexOf(3))
// 3. Өгөгдсөн тэмдэгт мөрөөс -аас өгөгдсөн тэмдэгт байгаа эсэхийг олох функц бич. 
// Тухайн тэмдэгт байвал индексийг буцаана. Байхгүй бол -1 буцаана. 2doh bodlogtoi adilhan asuulttai bn?

// 4. Өгөгдсөн 2 тоон интервал дахь санамсаргүй тоо буцаах функц бич.
function randomNumber (a, b) {
    let max = Math.max(a, b)
    let min = Math.min(a, b)
    const c = Math.floor(Math.random() * (max - min + 1) + min);
    return c
}

console.log(randomNumber(2, 5)) // 3


//5. Өгөгдсөн array - ийн дундажыг олох функц бич.

let myArr = [1, 2, 3, 4, 5, 6, 7, 8]
// 6. Өгөгдсөн array - ийн нийлбэрийг олох функц бич.

// 8.
// console.log('ABC'.toLocaleLowerCase)
function strToLowerCase(arr){
    for(let i = 0; i< arr.length; i++) {
        console.log(arr[i].toUpperCase()) // eserger n to LowerCase
        arr[i] = arr[i].toUpperCase()
    }
    return arr
}
console.log((strToLowerCase(b)))
