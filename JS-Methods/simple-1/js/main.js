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


