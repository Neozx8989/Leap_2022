// console.log(`arrays methods`);

// //array at function

// function findAt(arr, index) {
//     return arr[index];
// }
// const array1 = [1, 2, 3, 4, 5];
// console.log(findAt(array1, 0));
// console.log(findAt(array1, 4));

// console.log(array1.at(0));
// console.log(array1.at(2));

// // arr1 = [1, 2, 3] arr2 =[4,5,6] => [1, 2, 3, 4, 5, 6]
// function arrConcat(arr1, arr2) {
// let concatedArray = []

//     for(let i =0; i < arr2.length; i++) {
//         concatedArray.push(arr2[i])
//     }
//     for(let i=0; i < arr1.length; i++) {
//         concatedArray.push(arr1[i])
//     }
//     return arr1
// }

// let arrayConcat1 = [1, 2, 3]
// let arrayConcat2 = [4, 5, 6]
// console.log(arrConcat(arrayConcat1, arrayConcat2));

// console.log(arrConcat(arrayConcat2, arrayConcat1));



//

// const array1 = [1, 2, 3];
// console.log(array1.includes(2)); // true

// const pets = ['Hypertext','Cascadingstyle','Javascript'];
// console.log(pets.includes('javascript')); // true
// console.log(pets.includes('hulgana')); // false

let arrayIncludes = function (arr, number) {
    let found = false;
    for(let i = 0 ; i < arr.length ; i++) {
        if (number === arr [i]) {
            found = true;
            break;
        }
    }
    return found
}

const arrayInc = [2, 4, 5]
console.log(arrayIncludes(arrayInc, 2));
console.log(arrayIncludes(arrayInc, 5));
console.log(arrayIncludes(arrayInc, 3));
// array implicit function includes
console.log('array builtin method includes')
console.log(arrayInc.includes(2));
console.log(arrayInc.includes(5));
console.log(arrayInc.includes(3));

// INDEX OF

// arr1 = [1, 2, 3] =>  3 index ? => 2

let findIndex = function (arr, number) {
    let index = -1
    for (let i = 0; i < arr.length; i++) {
        if(number === arr[i]) {
            index = i
        }
    }
    return index;
}
const arrIndex = [1,2,3]
console.log(findIndex(arrIndex, 3))
console.log(findIndex(arrIndex, 2))
console.log(findIndex(arrIndex, 10))
console.log(`now it is time to test index of method od arry`)
console.log(arrIndex.indexOf(3))
console.log(arrIndex.indexOf(2))
console.log(arrIndex.indexOf(10))

const animals = ['chono', 'buhun', 'temee', 'nugas', 'buhun']
console.log(animals.indexOf('buhun')); // 1
console.log(animals.indexOf('buhun', 2)); // =>
console.log(animals.indexOf('Giraffe')); // - 1

//Join 
console.log(`Join`)

// arr1 = [1,2,3] => 123
let funcJoin = (miniiarray, symbol) => {
    let output = '';

    for(let i = 0; i < miniiarray.length; i++) {
        output = output + miniiarray[i] + symbol;
    }

    return output;
}

const arrayJoin = [1, 2, 3]
console.log(funcJoin(arrayJoin, ","))
console.log(`array join method`)


const jiguurten = [`Elee`, `Heree` , `Galuu`];
console.log(jiguurten.join())
console.log(jiguurten.join(''))
console.log(jiguurten.join(' '))
console.log(jiguurten.join(' _ '))
console.log(jiguurten.join(' - '))
console.log(jiguurten.join(' + '))

// arr1 = [1,2,3] => pop => [1,2] 

let popFunc = (arr) => {
    const lastIndex = arr.length -1;
    let poppedArray = []
    for (let i = 0; i < arr.length; i++) {
        if (i == lastIndex) {
            poppedArray.push(arr[i]);
        }
    }
    return poppedArray
}

const popArray = [1, 2, 3]
console.log(popFunc(popArray))
console.log(popFunc([12, 4, 3, 5, 6]))
