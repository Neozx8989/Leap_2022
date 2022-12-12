/*| 0 | 0 | 0 | x | x | x | 0 |
 *| 0 | 0 | 0 | x | x | x | 0 |
 *| 0 | 0 | 0 | x | x | x | 0 |
 *| 0 | 0 | 0 | x | x | x | 0 |
 *| 0 | 0 | 0 | x | x | x | 0 |
 *| 0 | 0 | 0 | x | x | x | 0 |
 *| 0 | 0 | 0 | x | x | x | 0 |
 
 * Example - 2: tic tac toe

*/
// let row1 = ["x" , "o" , "x"];
// let row2 = ["o" , "o" , "x"];
// let row3 = ["x" , "x" , "o"];
// console.log(row1);
// console.log(row2);
// console.log(row3);

let tictactoe = [["x" , "o" , "x"] , ["o" , "o" , "x"] , ["x" , "x" , "o"]]
console.log(tictactoe);
console.log(tictactoe[1][1])


console.log(" For loop double for")
// tictactoe buh murnii elementudig hewlene uu
for(let i = 0; i < tictactoe.length; i++) {
    // console.log(tictactoe[i]);
    // double for loops
    for (let j = 0 ; j < tictactoe[i].length ; j++) {
        console.log(tictactoe[i][j])
    }
}


console.log("TIC TAC TOE")
/* | x | o | x | => row1
*  | o | o | x | => row2
*  | x | x | x | => row3 */

let p1 = Number(prompt("Give number"));
let p2 = Number(prompt("Give number"));
let p3 = prompt("Give solih utga");

tictactoe[p1][p2] = p3;

for(let i = 0; i < tictactoe.length; i++) {
    let output = ""
    for ( let j= 0; j < tictactoe.length; j++) {
        output = output + "|" + tictactoe[i][j] + "|";
    }
    console.log(output);
}



