let array = [1, 4, 5, 6, 8, 10, 3, 2, 10, 9, 8];
console.log(array)

for ( let i = 0 ; i < array.length ; i++) {
    if (array[i] % 2 ==0) {

        array[i] = array[i] + 4;

    } else if (array[i] % 2==1) {

        array[i] = array[i] - 5;

    }
} 

console.log(array);