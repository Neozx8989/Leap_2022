
function howDoesTheFoxSay(array, animalType) {
    for(let i = 0; i< array.length; i++) {
        if(array[i].type == animalType) {
            console.log(animalType);
            console.log(array[i].sound , array[i].sound , array[i].sound)
        }
    }
}

let animals = [
    {
        type: 'dog',
        sound: 'woof'
    },
    {
        type: 'cow',
        sound: 'iimbyuu'
    },
    {
        type:'cat',
        sound: 'meow'
    }
]

console.log('Dog barking');
howDoesTheFoxSay(animals, 'dog');
console.log('Cow iimbyuuing');
howDoesTheFoxSay(animals, 'cow');
console.log('Cat meowing');
howDoesTheFoxSay(animals, 'cat');