let array = Number(prompt("Toon utga ugnu vv"));
console.log(array)

for ( let i = 0 ; i < array.length ; i++) {
    if (array[i] % 2 ==0) {

        array[i] = array[i] + 4;

    } else if (array[i] % 2==1) {

        array[i] = array[i] - 5;

    }
} 

console.log(array);