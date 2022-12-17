// 1. arrayOfNumbers гэсэн variable зарлаад дараах тоонуудыг оруул. 43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11
let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];

// 2. Array доторх тоонуудын нийлбэрийг ол.
console.log(`2. -----Array доторх тоонуудын нийлбэрийг ол.-----`)
let sum = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
    sum = sum + arrayOfNumbers[i];
    console.log(+ sum)
}

// 3. Хамгийн их тоог ол.
console.log(`3. -----Хамгийн их тоог ол.-----`)
let hamgiinIhToo = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
   if(hamgiinIhToo < arrayOfNumbers[i]) {
    hamgiinIhToo = arrayOfNumbers[i]
   } else {
    min = arrayOfNumbers[i]
   }
}
console.log(+ hamgiinIhToo)

// 4. Хамгийн бага тоог ол.
console.log(`4. -----Хамгийн бага тоог ол.-----`)

for (let i = 0; i < arrayOfNumbers.length; i++) {
    if(hamgiinIhToo > arrayOfNumbers[i]) {
     hamgiinIhToo = arrayOfNumbers[i]
    } else {
     min = arrayOfNumbers[i]
    }
 }
 console.log(+ hamgiinIhToo)

// 5. Array - ийн эхэнд дурын 1 тоог нэм.
console.log(`5. ------Array - ийн эхэнд дурын 1 тоог нэм.------`)
arrayOfNumbers.unshift(21);
console.log(arrayOfNumbers)

// 6. Array - ийн төгсгөлд дурын 1 тоог нэм.
console.log(`6. -----Array - ийн төгсгөлд дурын 1 тоог нэм.-----`)
const nemegdehVg = arrayOfNumbers.push(777);
console.log(arrayOfNumbers)