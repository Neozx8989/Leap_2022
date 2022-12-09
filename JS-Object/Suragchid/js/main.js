function upTwoTwenty(array) {
    if(let i = 0 ; i < array.length ; i++) {
        console.log(array[i]);
    }
}


const students = [
    {
        fName: 'Tushig',
        birthOfYear: 2003,
        hobby: 'Basketball',
        single: false
    },

    {
        fName: 'Munkherdene',
        birthOfYear: 2005,
        hobby: 'Dance',
        single: true
    },

    {
        fName: 'Khongorzul',
        birthOfYear: 2004,
        hobby: 'Book',
        single: true
    },

    {
        fName: 'Suwdaa',
        birthOfYear: 2004,
        hobby: 'Book',
        single: true,
    }

    
]

console.log(students)
findOlderStudents(students);