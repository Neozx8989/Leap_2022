// 1.
const fn = (`Түшигээ`);
const lf = (`Мөнхбаяр Түшигээ`);
console.log(fn.length);
console.log(lf.length);

// 2.
const f1rstName = (`Tushigee`);
console.log(f1rstName.toLowerCase());
// 3.
console.log(f1rstName.toUpperCase());
// 4.

let fName = (`'Pinecone academy- н' болон`);
let lName = fName.concat(`, 'leap хөтөлбөрт тавтай морилно уу?'`)
console.log(lName);

// 5 .
let firstName = (`Tushigee`);
let lastName = (`Munkhbayar`);
let country = (`Mongolia`);
let city = (`Ulaanbaatar`);
let age = (`19`);
let job = (`Developer`);
let flcCaj = `Намайг `+ lastName.concat(' Овогтой ') + firstName.concat(' гэдэг. Би ') + country.concat(' Улсын Нийслэл ') + city.concat (' Хотод оршин суудаг. Би одоо ') + age.concat (' настай. Хийдэг ажил маань -') + job.concat();
console.log(flcCaj);
