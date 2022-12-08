// JS METHOD 
// IN THE FOLLOWING SHOPPING CART ADD, REMOVE, ...
console.log(`1) `)



const shoppingCart = ['Milk' , 'Coffee' , 'Tea' , 'Honey'];
shoppingCart.splice(0,0,'Meat');
console.log(shoppingCart);

shoppingCart.splice(5,0,'Sugar');
console.log(shoppingCart);

console.log(shoppingCart.indexOf('Honey'));
shoppingCart.splice(4,1,'honey');
console.log(shoppingCart);

shoppingCart.splice(3,1, 'Green Tea');
console.log(shoppingCart);

// SIMPLE
console.log('2) SIMPLE')



let array = [ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon" ];
array.sort();
console.log(array)

let reversed = array.reverse();
console.log('reversed:' , reversed);

array.splice(0,1);
console.log(array);

array.splice(3,1);
console.log(array);

array.splice(4,1);
console.log(array)

array.splice(0);
console.log(array)


// CAR
console.log(`3) CAR`);



let carBrands = [
['Aston Martin Lagonda Ltd' , 'UK' , '2016']
["Audi", "Germany", 2016],
["BMW", "Germany", 2016],
["Chevrolet", "USA", 2016],
["Dodge", "USA", 2016],
["Ferrari", "Italy", 2016],
["Honda", "Japan", 2016],
["Jaguar", "UK", 2016],
["Lamborghini", "Italy", 2016],
];

// 1.
// let input = prompt(" Search")
// if (input == "a" || input == "A") {
//     console.log(carBrands[0][0])
// } 

// reverse number 
