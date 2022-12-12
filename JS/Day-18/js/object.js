let rabbit1 = {
    color: 'White',
    rName: 'Chandaga',
    gender: 'Male' ,
    age: 2 ,
    jump: function() {
        console.log(`Sorry I broke my lrg i cannot jump`)
    },
    
    sayMyName: function(myName) {
        console.log(`Your name is ${myName}`);
    }

}


console.log(rabbit1)
console.log(rabbit1.color);
rabbit1.color = 'Shavhai bolow'
console.log(rabbit1);
rabbit1.jump()
rabbit1.sayMyName(`Khangaikhuu`);

let rabbit2 = {
    height: '35cm' ,
    age: 3,
    kg: 15,
    color: 'Black',
    gender: 'Famale',
    jump: function() {
        console.log('I can jump');
    }
}

console.log(`$$$$$$$$$$$$$$$$$$`)
console.log(`Here is rabbit 2 speaks`)
console.log(`$$$$$$$$$$$$$$$$$$`)


console.log(rabbit2);
let rabbits = [rabbit1, rabbit2]
console.log(rabbits);
rabbit2.jump();