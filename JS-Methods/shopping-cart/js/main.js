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
