// Array - ын хувьсагчийг itCompanies гэж зарлаж, Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon зэрэг анхны утгыг оруулна уу. 
let itCompanies = ["Facebook", "Googel" , "Microsoft" , "Apple" , "IBM" , "Oracle" , "Amazon"];

// console.log() ашиглан array хэвлэх
console.log(`2.-----console.log() ашиглан array хэвлэх -----`)
console.log(itCompanies);

// Array дахь компаниудын length хэвлэх
console.log(`3. -----Array дахь компаниудын length хэвлэх-----`)

console.log(itCompanies.length);

// Эхний компани, дунд болон сүүлчийн компанийг хэвлэх
console.log(`4. -----Эхний компани, дунд болон сүүлчийн компанийг хэвлэх-----`)
console.log(itCompanies[0] , itCompanies[3] , itCompanies[6]);

// Компани бүрийг хэвлэх
console.log(`5. -----Компани бүрийг хэвлэх-----`)

console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6]);

// Компанийн нэр тус бүрийг нэг нэгээр нь том үсгээр сольж хэвлэж гарга
console.log(`6. -----Компанийн нэр тус бүрийг нэг нэгээр нь том үсгээр сольж хэвлэж гарга-----`)

console.log(itCompanies[0].toLocaleUpperCase())
console.log(itCompanies[1].toLocaleUpperCase())
console.log(itCompanies[2].toLocaleUpperCase())
console.log(itCompanies[3].toLocaleUpperCase())
console.log(itCompanies[4].toLocaleUpperCase())
console.log(itCompanies[5].toLocaleUpperCase())
console.log(itCompanies[6].toLocaleUpperCase());


// Array - г өгүүлбэр болгон хэвлэ: Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon зэрэг мэдээллийн технологийн томоохон компаниуд.
console.log(`7. -----Array - г өгүүлбэр болгон хэвлэ: Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon зэрэг мэдээллийн технологийн томоохон компаниуд.-----`)
console.log(`${itCompanies} зэрэг мэдээллийн технологийн томоохон компаниуд.`);

