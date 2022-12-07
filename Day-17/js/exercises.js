// 1. Хоёр тооны утгыг хооронд харьцуулаад аль багыг нь хэвлээд true / false буцаадаг функц бичнэ үү. 
// Функцын нэр  нь findMin
function findMin(p1, p2) {
    if (p1 > p2) {
        return p1;
    } else {
        return p2;
    }
} 
console.log(findMin(5, 2));
console.log(findMin(21,2));

// 2. Өгөгдсөн array-ны элементүүдийг хэвлэдэг функц бичнэ үү. Функцын нэр нь printArray

// function printArray(zugeerner) {
//     for(let i = 0; i < zugeerner.length; i++) {
//         console.log(zugeerner[i]);
//     }
// } 
// let arr = [1, 2, 3, 4, 5]
// printArray(arr)

// 3. Өгөгдсөн array-наас хамгийн их утгыг нь олоод буцаадаг функц бичнэ үү. Функцын нэр нь findArrayMax. Функцээ expression хэлбэрээр бичнэ үү.
let myArray = [1, 2, 13, 4, 5, 6, 22, 44, 10,]
console.log(`3-r dasgal ehlel`)
let findArrayMax = function(ihutga) {
    let max = -1;
    for(let i = 0; i < ihutga.length; i++) {
        if (max <= ihutga[i]) {
            max = ihutga[i];
        }
    }
    return max;
}  
console.log(findArrayMax(myArray));
console.log(`3-r dasgal tugsgul`);


// 4. Өгөгдсөн тоон array-ны утгуудыг бүгдийг нь нэмээд дундажыг нь олоод буцаадаг функц бичнэ үү.
// Функцын нэр нь findArrayAverage. Функцээ arrow expression function хэлбэрээр бичнэ үү.
console.log(`4-r dasgal ehlel`)

let miniiArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let findArrayAverage = (miniiArray) => {
    let sum = 0;
    for(let i = 0; i < miniiArray.length; i++) {
        sum = sum + miniiArray[i];
    }
    const average = sum / miniiArray.length;
    return average;
}
console.log(findArrayAverage(miniiArray));

console.log(`4-r bodlogo tugsgul`)


//

function findOntsDumd(points) {
    if(points < 60) {
        return "very bad"
    } else if (points >= 60 && points < 70) {
        return "satisfied"
    } else if (points >= 70 && points < 80) {
        return "avarage"
    } else if (points >= 80 && points < 90) {
        return "good ✅"
    } else if (points >= 90 && points < 100) {
        return "very good ✅"
    } else {
        return "Please give me points between 0 and 100"
    }   
} 

let inputPoint = Number(prompt(`Give me student point`));
let inputStudentName = Number(prompt(`Give me student Name`));
let pointResult = findOntsDumd(inputPoint);
console.log(`${inputStudentName} - ${inputPoint} - ${pointResult}`);


