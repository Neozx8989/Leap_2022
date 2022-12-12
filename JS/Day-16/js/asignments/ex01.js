let too1 = Number(prompt("Nadad ymrch hamagui too ugnu vv"))
let too2 = Number(prompt("Nadad ymrch hamagui too ugnu vv"))

function findMax(x, y) {
    if (x < y) {
        console.log(y + " - is bigger than - " + x);
    } else {
        console.log(x + " is bigger than " + y);
    }
}
findMax(too1, too2)