// ES5
var age = 20;
//ES6
let days = 5;
const pi = 3; //immuttable


//TEMPLATE LITERALS
function myFunc (name, age) {
    return 'Сайна уу' + name + 'чи одоо ' + age + ' настай'
}
console.log(myFunc(' Түшигээ ', 19 )) //Сайна уу Түшигээ чи одоо 19 настай

//ES6 arrow function
const myFunc = (name, age ) => {
    return `Hi ${name}, Your age is ${age} year old`
}
console.log(myFunc('John', 20))