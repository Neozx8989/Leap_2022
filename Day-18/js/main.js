// // let miniiarray = [1, 2, 3, 5, 6];
// // let anhniiElement = miniiarray.shift(); // shift n minii array dotor bga ehno 0 utgiig salgaj avna.
// // console.log(miniiarray);
// // console.log(anhniiElement);

// // let shiftArr = (arr) => {
// //     let tempArray = []
// //     for (let i=0; i <arr.lenght; i++) {
// //         if (i !==0) {
// //             tempArray.push(arr[i])
// //         }
// //     }
// //     return tempArray;
// // }

// // let arr1 = [1, 2, 3, 4]
// // console.log(shiftArr(arr1));
// // console.log('array shift method');

// // const arr = [1, 2 ,3];
// // const firstElement = arr.shift();
// // console.log(arr)
// // console.log(firstElement);


// // /// UNSHIFT ARRAY ALGORITHM
// // let unshiftArray = function (arr, number) {
// //     let tempArray = [];
// //     tempArray.push(number);

// //     for(let i =0; i < arr.length; i++) {
// //         tempArray.push(arr[i])
// //     }
// //     return tempArray;
// // }

// // let arr2 = [5, 6, 7];
// // console.log(unshiftArray(arr2, 1));

// // console.log('array unshift method')
// // const array1 = [1, 2, 3];
// // console.log(array1.unshift(4));
// // console.log(array1);

// // // SORT ALGORITHM
// // console.log("SORT ALGORITM")


// // let inputarray = [1, 2, 8, 7, -1, 10];
// // function sortingAlgorithm(inputarray) {
// //     let indexMin = 0;
// //     for (let i =0; i < inputarray.length - 2; i++) {
// //         let indexMin = i;
// //         for (let j = i+1; j < inputarray.length - 1; j++) {
// //             if (inputarray[j] < inputarray[indexMin]) {
// //                 indexMin = j;
// //             }
// //         }
// //         let temp = inputarray[i]
// //         inputarray[i] = inputarray[indexMin];
// //         inputarray[indexMin] = temp;
// //     }    
// //     return inputarray;
// // }

// // console.log(sortingAlgorithm(inputarray));



// console.log('array sorting');


// console.log('Munkherdene' , 'Tushig' , 'Khongoroo' , 'Suvdaa')
// const names = ['Munkherdene' , 'Tushig' , 'Khongoroo' , 'Suvdaa'];
// names.sort()
// console.log(names);

// // function array reverse
// console.log("Reverse function");

// function arrayReverse(arr) {
//     for(let i = arr.length - 1; i >= 0; i--) {
//         tempArray.push(arr[i]);
//     }
//     return tempArray;
// }

// let arrayReverse = [4, 5, 1, 8]
// console.log(arrayReverse(arrayReverse));

// const numbers = ['one', 'two' , 'three'];
// console.log('array1' , number);
// const reversed = numbers.reverse();
// console.log('reversed' , reversed);

// SLICE
console.log('SLICE')


const nameSlice = ['Munkherdene' , 'Tushig' , 'Khongorzul' , 'Suwdaa' , 'Sodoo' ,'Khangaikhuu-teacher'];
console.log(nameSlice.slice(2));
console.log(nameSlice);

function nameSliced (arr, index) {
            let tempArray = []
            for (let i=index; i <arr.length; i++) {
                tempArray.push(arr[i]);


            }
            return tempArray
    }

console.log(nameSliced([1, 2, 3, 4, 5], 3)); 

// SPLICE METHOD
console.log("Splice method")

const spliceNames = ['Monday' , 'Wednesday' , 'Thursday' ,'Sunday', 'Saturday']
spliceNames.splice(1,0,'Tuesday')
spliceNames.splice(4,0, 'Friday')
console.log(spliceNames)

