// let a = "hi";
// let b = "hi"
// console.log ( a < b );

// console.log(a == b);

// console.log( a === b );

// let c = 10;
// let d = '10';
// console.log(c == d);
// console.log(c === d);
// console.log(c !== d);


// let e = true;
// let f = false;

// console.log(e < f);
// console.log(e > f);

// let result = 10;
// if (result > 10){
//     console.log('true 10');
// } else {
//     console.log('false 10');
// }

// result > 10 ? console.log('true than 10') : console.log('false than 10');

// result > 10 ? (result < 11 ? console.log('test'): console.log('hi')) : console.log('false than 10');

//Гончигсумлай хоолны газар оров. Орсон хоолны газар нь 5000₮ - 30000₮ хооронд 15% нэмж төлдөг, бусад үед 20% - ийг нэмж төлдөг бол. 
//Эдгээр тохиолдолуудад нийт хэдийг төлөхийг олно уу. Эдгээр тохиолдолуудад тус бүр хэдийг төлөх вэ?
// 3000₮, 27500₮, 100000₮. (if else ашиглахгүй ternary operator ашиглаарай).
// const tip1 = 3000;
// const tip2 = 27500;
// const tip3 = 100000;

// if (5000 >= tip1 && 30000 <= tip1) {
//     console.log('bodlogo bodoh 15%')
// } else {
//     console.log('busad bodoh 20%');
// } if (5000 >= tip2 && 30000 <= tip2) {
//     console.log('bodlogo bodoh 15%')
// } else {
//     console.log('busad bodoh 20%')
// }

// let tipResul1 = (5000 >= tip1 && 30000 <= tip1) ? tip1 * 0.15 + tip1 : tip1 * 0.2 + tip1;
// const input = prompt('Give me money bro');
// const numberInput = Number(input);
// const numberInputPrompt = Number(prompt('Give me money bro'));
// let extipResult1 = (5000 >= tip1 && 30000 <= tip1) ? tip1 * 0.15 + tip1 : tip1 * 0.2 + tip1;
// let tipResult2 = (5000 >= tip2 && 30000 <= tip2) ? tip2 * 0.15 + tip2 : tip2 * 0.2 + tip2;
// let tipResult3 = (5000 >= tip3 && 30000 <= tip3) ? tip3 * 0.15 + tip3 : tip3 * 0.2 + tip2;
// console.log('tipResult1');
// console.log('tipResult2');
// console.log('tipResult3');


// Onts dumd is bad in his lessons

// const studentPoint = Number(prompt('Give me your score'));
// const studentName = prompt('Give me your student name');

// let studentResult = 'Оноо дандаа 100-аас доош байх ёстой';

// if (studentPoint < 60) {
//     studentResult =  'Маш муу'
// } else if (studentPoint >= 60 && studentPoint < 70) {
//     studentResult = 'Хангалттай'
// }
// else if (studentPoint >= 70 && studentPoint < 80) {
//     studentResult = 'Дунд'
// }
// else if (studentPoint >= 80 && studentPoint < 90) {
//     studentResult = 'Сайн'
// }
// else if (studentPoint >= 90 && studentPoint < 100) {
//     studentResult = 'Маш сайн'
// }
// else {
//     console.log('buruu')
// }


// alert(studentName + ' - ' + studentPoint + ' - ' + studentResult);


// console.log(`${studentName} - ${studentPoint} - ${studentResult}`);


// alert ("Lorem Ipsum \"Its double quotation\" is simply dummy text of the printing and typesetting industry. \n\n \t Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
// console.log('Its log');
// console.error('Its error');
// const str = "Life, the universe and everyhing."; 
// console.log(str.length);

const registerNumber = prompt('Give register number');
// if (registerNumber.length == 10) {
//     console.log(true);
// } else {
//     console.log(false);
// }
// console.log(registerNumber.charAt(0));
// console.log(registerNumber.charAt(1));

// console.log(registerNumber.toUpperCase());
// console.log(registerNumber.toLowerCase());

// let firstName = 'Munkhbayar';
// let fullName = firstName.concat(' ','Tushig');
// console.log(fullName); 
// console.log(firstName); 

// let firstName = 'Jane';
// let fullName = firstName + ' ' + 'Smith';
// console.log(fullName);


// const registeChar=registerNumber.substr(0, 2);
// const registrChar=registerNumber.substr(2, 9);
// if (Number(registrChar) == NaN) {
//     console.log('Your register character wrong')
// } else {
//     console.log('Your register character correct')
// }



//charAt(index) str[index]
// console.log(str.charAt(0));
// console.log(str[1]);

//БАЙРШИЛ ОЛОХ 

// let str = "This is a string";
// console.log(str.indexOf("string"));

//ХООСОН ЗАЙ УСТГАХ

// let rawString = ' Hi ';
// let strippedString = rawString.trim();
// console.log(strippedString);

// let str = "This is a string";
// console.log(str.indexOf("string"));

const registerChar=registerNumber.substr(0, 2);
const registerNum=registerNumber.substr(2, 9);


let rawString = ' Hi ';
let strippedString = rawString.trim();
console.log(strippedString);

if (!Number.isInteger(Number(registerChar)) && Number.isInteger(Number(registerNum)) && registerNumber.length == 10) {
    console.log('Your register character correct')
} else {
    console.log('Your register character wrong')
}




// console.log(Number('abc'));
// console.log(Number.isIntager(Number(abc)));
// console.log(Number('123456'));
// console.log(Number.isInteger(Number('123456')));


