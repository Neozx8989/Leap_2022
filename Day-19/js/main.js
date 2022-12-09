//OBJECT FUNCTION
console.log('Day 19 object function');

let teacherDolgor= {
    firstname: 'Dolgor',
    lastname: 'Dondog',
    age: 35,
    experience: 10,
    children: [],
    isMarried: true,
    address: {
        district: 'Баянгол-Дүүрэг',
        khoroo: '1-r',
        khoroolol: '2-r',
        houseNumber: '016',
        doorNumber: '4'
    },
    GPA: 94.5,
    introduction: function() {
        console.log(`Миний нэрийг${this.lastname}-ийн ${this.firstname}-гэдэг.
        Би ${this.age} настай. Би ${this.experience}-жилийн ажлын туршлагатай.
        Би ${this.address.district}-т амьдардаг.`);
    }
}
teacherDolgor.introduction()

let teacherDolgorClone = teacherDolgor;
teacherDolgorClone.firstname = 'Dolgor Clone';
console.log(teacherDolgor.firstname);
console.log(teacherDolgorClone.firstname);


//Spread operator buyu 3n tseg {...name}
console.log('Spread {...name}  >>>')
let teacherDolgorRealClone = {...teacherDolgor};
teacherDolgorRealClone.firstname = 'Dolgor Real clone';
console.log(teacherDolgorRealClone.firstname);
console.log(teacherDolgor.firstname);

console.log(Object.keys(teacherDolgor));
console.log(Object.values(teacherDolgor));

let newTeacher = Object.create({
    firstName: 'firstName',
    lastname:'lastname'
})
console.log(newTeacher);

Object.assign({

}, newTeacher)
const target = {a: 1, b: 2};
const source = {b:4 , c: 5};

const returnTarget = Object.assign(target, source);
console.log(returnTarget);